@echo off
REM ============================================================
REM  Portfolio Aboubakar - MISE A JOUR + lancement (Windows)
REM  Recupere les dernieres corrections depuis GitHub,
REM  installe les dependances si besoin, puis demarre le site.
REM ============================================================
setlocal
cd /d "%~dp0"

echo.
echo === 1/4 Verification de Git et Node.js ===
where git >nul 2>nul
if errorlevel 1 (
  echo [ERREUR] Git n'est pas installe. Telechargez-le sur https://git-scm.com/download/win
  echo.
  pause
  exit /b 1
)
where node >nul 2>nul
if errorlevel 1 (
  echo [ERREUR] Node.js n'est pas installe. Telechargez la version LTS sur https://nodejs.org
  echo.
  pause
  exit /b 1
)
node -v

if not exist ".git" (
  echo.
  echo [ERREUR] Ce dossier n'est pas un clone Git ^(pas de dossier .git^).
  echo Vous avez probablement telecharge un ZIP de GitHub.
  echo Solution : recuperez le projet avec Git ^(une seule fois^) :
  echo.
  echo     git clone https://github.com/lesagenoir225-tech/ABOUBAKAR-PORTFOLIO.git
  echo.
  pause
  exit /b 1
)

echo.
echo === 2/4 Avez-vous modifie des fichiers a la main dans ce dossier ? ===
set /p EDITS="  Tapez o (oui) ou n (non) puis Entree : "
if /i "%EDITS%"=="o" (
  echo Mise de vos modifications de cote ^(git stash^) pour ne rien perdre...
  call git stash push -u -m "sauvegarde avant mise a jour"
)

echo.
echo === 3/4 Recuperation des dernieres corrections depuis GitHub ===
call git fetch origin || goto :fail
call git checkout main || goto :fail
call git pull origin main || goto :fail
call git log --oneline -3

echo.
echo === 4/4 Installation des dependances et demarrage ===
if not exist "node_modules" (
  call npm install || goto :fail
) else (
  call npm install --no-audit --no-fund || goto :fail
)

echo.
echo Ouverture de http://localhost:5173 ...
echo Pour arreter le serveur : Ctrl + C
echo.
start "" http://localhost:5173
call npm run dev

echo.
echo Le serveur s'est arrete.
pause
exit /b 0

:fail
echo.
echo [ERREUR] Une etape a echoue. Lisez les messages ci-dessus.
echo Astuce : si git se plaint de modifications locales, relancez ce fichier
echo et repondez "o" a la question 2.
echo.
pause
exit /b 1
