# display-mode ownership

Repository: https://github.com/ourapps-ae/display-mode.git (local only; nothing pushed). Package `ourapps-ae/display-mode`, provides `facility` (`ae/display-policy`), requires `configuration` (`ae/display-mode-configuration`).

Code: `implementation/web/mode.ts`, `implementation/apple/Sources/DisplayPolicy.swift`, `implementation/android/src/main/java/ae/display/DisplayPolicy.kt`.
Artefacts: `component.json`, `CONTRACT.md`, `INSTRUCTIONS.md`, `SOURCE.md`, `suitability.json`, `tools.lock.json`, `SOURCE.json`, `interfaces/contract.json` (OpenRPC 1.3.2 document of the provided ae/display-policy interface), `interfaces/required-configuration.json` (JSON Schema 2020-12 of the configuration), `tests/`, `visual/`. No data is kept, so there is no `migration.json`.
Server display authentication and private-data redaction belong to the room service, not here.
