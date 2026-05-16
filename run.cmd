@echo off
cd /d %~dp0

if not exist node_modules (
    echo Cai dat dependencies...
    npm install
    if errorlevel 1 (
        echo Loi khi cai dat dependencies!
        pause
        exit /b 1
    )
)

echo Khoi dong server tai http://localhost:3000
npm run dev
pause
