# Source mapping

Reference revision: `19905b75dbea89fbfd424d67fe26c81aaed0e018` (frozen McInPoker, read with `git show` in `mcinpoker/`). `SOURCE.json` keeps the pinned source hashes.

| Implementation file | Frozen source and lines | Generalised | Left behind |
|---|---|---|---|
| `implementation/web/mode.ts` (20) | `web/src/mode.ts` 1-16 (`SessionMode`, `sessionMode`, `publishMode`) | `createMode(initial, eventName)` replaces the module-level mode and the fixed event name; `displayCapabilities(display)` states the board rule once | Browser storage of the mode (`localStorage`, line 3), the desktop flag and the `window` properties (lines 4-9), the application's event name |
| `implementation/apple/Sources/DisplayPolicy.swift` (5) | `ios/McInPoker/Sources/Platform.swift` 3-5 (`RoomMode`); viewer rules from `ios/McInPoker/Sources/McInPokerApp.swift` 25, 36, 69, 118 and `ios/McInPoker/Sources/TableModel.swift` 521-530 | Three pure functions of one boolean | SwiftUI view helpers and platform styling (`Platform.swift` 7-41), model state |
| `implementation/android/src/main/java/ae/display/DisplayPolicy.kt` (7) | `android/app/src/main/java/com/georgemcintyre/mcinpoker/TableViewModel.kt` 198 and `.../ui/Guide.kt` 73 (`view.display` checks) | Same three pure functions | View model, guides, Compose screens |

Fixtures, `examples/consumer.ts`, `scripts/check-native.py` and the tests are neutral local checks written for this component. Server-side enforcement of authentication and redaction stays with the room service.

The manifest marks the `configuration` requirement `optional: true` and the visual definition draws it as not required (display-mode-configuration is a connector for values the application can also pass in code, so a design may leave it unconnected).
