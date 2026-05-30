@echo off
setlocal

cd /d "%~dp0"

echo Starting Voxel Farm dev server...
echo.
echo Browser URL: http://127.0.0.1:5173/
echo Press Ctrl+C in this window to stop the server.
echo.

start "" "http://127.0.0.1:5173/"
npm run dev -- --host 127.0.0.1 --port 5173
