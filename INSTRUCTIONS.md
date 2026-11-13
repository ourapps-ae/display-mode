# Display mode instructions

Package `ourapps-ae/display-mode` version `0.5.1`. It provides `display-policy` (type `ae/display-policy`, version 1.0.0) and optionally requires `display-mode-configuration` (type `ae/display-mode-configuration`, version 1.0.0).

## For the agent

- Select this component when the application has a shared board or display screen that must show no private information and must not capture camera, microphone or actions (the recipe's `devices` answer includes a shared display).
- Connect the provided `display-policy` port to the components that capture media or accept actions (`video-calls`, `windows-desktop`, the application's action handlers).
- Supply `configuration` from the recipe: an initial mode (`player` or `board`) and a nonempty event name (for example `app:mode`). Use the same event name for every consumer.
- No accounts or keys are needed.

## For the developer

- Web: `components/display-mode/web/mode.ts`. Call `createMode(initial, eventName)` once per session and call `publish(initial)` before any capture. `publish` sets `document.documentElement.dataset.mode` and then dispatches `CustomEvent(eventName, {detail: {mode}})`. `current()` reads the mode. `displayCapabilities(display)` returns `{canAct, canCapture, canSeePrivate}`, all false when `display` is true.
- Apple: `components/display-mode/apple/Sources/DisplayPolicy.swift` has `DisplayPolicy.canAct`, `canCapture` and `canSeePrivate`.
- Android: `components/display-mode/android/src/main/java/ae/display/DisplayPolicy.kt` has `ae.display.DisplayPolicy` with the same three functions.
- Call the policy at each action and media boundary. This component does not authenticate anyone and does not hide data on the server; the room service must redact private views itself.
- Persistence of the chosen mode belongs to you.

## How to check

From the component directory:

- `node --test tests/mode.test.mjs` (required)
- `python3 scripts/check-native.py apple` (needs swiftc 6.4)
- `python3 scripts/check-native.py android` (needs kotlinc and java 26.0; not runnable where kotlinc is missing)
- `python3 -m aepm review <digest> --store STORE --policy POLICY --trusted --allow-network` checks an archive fetched with `python3 -m aepm fetch ourapps-ae/display-mode@VERSION --store STORE --from https://ourapps.app` and runs its suites.

In the application, switch to board mode and confirm that capture requests are refused, no private values render and the mode event fires once per change.
