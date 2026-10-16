@echo off
REM ============================================================
REM  Portfolio Aboubakar - lancement local (Windows)
REM  Double-cliquez sur ce fichier pour demarrer le site.
REM ============================================================
setlocal
cd /d "%~dp0"

echo.
echo === Verification de Node.js ===
where node >nul 2>nul
if errorlevel 1 (
  echo [ERREUR] Node.js n'est pas installe.
  echo Telechargez la version LTS sur https://nodejs.org puis relancez ce fichier.
  echo.
  pause
  exit /b 1
)
node -v

echo.
echo === Installation des dependances (uniquement si necessaire) ===
if not exist "node_modules" (
  call npm install
  if errorlevel 1 (
    echo.
    echo [ERREUR] L'installation a echoue. Regardez les messages ci-dessus.
    echo.
    pause
    exit /b 1
  )
) else (
  echo node_modules deja present - etape ignoree.
)

echo.
echo === Demarrage du serveur de developpement ===
echo Le site va s'ouvrir sur http://localhost:5173
echo Pour arreter le serveur : Ctrl + C
echo.

start "" http://localhost:5173
call npm run dev

echo.
echo Le serveur s'est arrete.
pause
