Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = "C:\Users\Administrator\WorkBuddy\2026-07-12-21-45-52\codex-pet-generator"
WshShell.Run "npx.cmd next dev -p 3000", 0, False
