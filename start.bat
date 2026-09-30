@echo off
REM Starts a local web server for the HSK study site and opens it.
REM The microphone (speaking practice) works best from http://localhost rather than a file:// page.
cd /d "%~dp0"
start "" http://localhost:8770/
python -m http.server 8770
