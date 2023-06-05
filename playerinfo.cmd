@echo off
set c=1
setlocal enableDelayedExpansion
for /f "delims=" %%a in ('type C:\Users\%USERNAME%\Downloads\player_data.txt') do (
if !c! EQU 1 set copy=%%a
set /a c+=1
set copy2=%%a

)
set coly=%copy:~15,25%
set coly=%coly:~0,-1%
set coly2=%copy2:~14,25%
set coly2=%coly2:~0,-1%
echo %coly% >nameplayer.txt
echo %copy2% >colorplayer.txt