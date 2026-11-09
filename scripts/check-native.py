import pathlib
import subprocess
import sys
import tempfile

root = pathlib.Path(__file__).resolve().parents[1]
with tempfile.TemporaryDirectory(prefix="display-policy-") as directory:
    output = pathlib.Path(directory)
    if sys.argv[1] == "apple":
        subprocess.run(["swiftc", str(root / "implementation/apple/Sources/DisplayPolicy.swift"), str(root / "tests/apple/main.swift"), "-o", str(output / "check")], check=True)
        subprocess.run([str(output / "check")], check=True)
    elif sys.argv[1] == "android":
        subprocess.run(["kotlinc", str(root / "implementation/android/src/main/java/ae/display/DisplayPolicy.kt"), str(root / "tests/android/Main.kt"), "-include-runtime", "-d", str(output / "check.jar")], check=True)
        subprocess.run(["java", "-jar", str(output / "check.jar")], check=True)
    else:
        raise SystemExit("Unknown platform")
