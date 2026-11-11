# Local workflow

Local only: no commits, pushes, remote changes or publishing without George's say-so. Licence wording remains deferred.

Commands from the package root: `node --test tests/mode.test.mjs` (required), `python3 scripts/check-native.py apple`, `python3 scripts/check-native.py android` (kotlinc is not installed here, so the Android check does not run).
Review a fetched archive: `python3 -m aepm review <digest> --store STORE --policy POLICY --trusted --allow-network`. Always `-B`.
