@echo off
title Http://www.gm005.Com 传奇版本基地开区数据清理工具 
color 0A
ECHO ┌──────────────────────────┐
ECHO │∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞│
ECHO │   ∵专业传奇版本 www.gm005.com  QQ：156598018∴    │
ECHO │∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞│ 
ECHO │      每日更新5-10个商业开区版本联系QQ156598018     │
ECHO │∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞│
ECHO │∞∞∞∞∞按任何键进行清除数据资料!!!!∞∞∞∞∞∞∞│
ECHO │──────────────────────────│
ECHO │∴∵∴∵∴∵此次清理数据的游戏目录为：%CD%  │
ECHO │                                                    │
ECHO │∵∴∵∴∵∴如果不正确请立即关闭此清理数据∴∵∴∵∴│    
ECHO │──────────────────────────│
ECHO │玩家数据清空前,请备份相关数据,必且确保游戏已停止服务│
ECHO │∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞│ 
ECHO └──────────────────────────┘  
pause

set WSDir=%CD%

del %WSDir%\Mir200\Envir\LevelOrder\*.DB
del %WSDir%\DBServer\FDB\*.DB
del %WSDir%\DBServer\FDB\*.idx
del %WSDir%\LoginSrv\IDDB\*.DB
del %WSDir%\LoginSrv\IDDB\*.idx
del %WSDir%\Mir200\GuildBase\Guilds\*.txt
del %WSDir%\Mir200\GuildBase\Guilds\*.ini
del %WSDir%\Mir200\Envir\Market_prices\*.prc
del %WSDir%\Mir200\Envir\Market_saved\*.sav
del %WSDir%\Mir200\Envir\Market_SellOff\*.sell
del %WSDir%\Mir200\Envir\Market_SellOff\*.gold
del %WSDir%\Mir200\Envir\Market_Upg\*.Upg
if exist %WSDir%\DBServer\Backup RD/S /Q %WSDir%\DBServer\Backup
md %WSDir%\DBServer\Backup

if exist %WSDir%\DBServer\ClearLog RD/S /Q %WSDir%\DBServer\ClearLog
md %WSDir%\DBServer\ClearLog

if exist %WSDir%\DBServer\Log RD/S /Q %WSDir%\DBServer\Log
md %WSDir%\DBServer\Log

if exist %WSDir%\DBServer\FDB RD/S /Q %WSDir%\DBServer\FDB
md %WSDir%\DBServer\FDB

if exist %WSDir%\LoginSrv\ChrLog RD/S /Q %WSDir%\LoginSrv\ChrLog
md %WSDir%\LoginSrv\ChrLog

if exist %WSDir%\LoginSrv\Conlog RD/S /Q %WSDir%\LoginSrv\Conlog
md %WSDir%\LoginSrv\Conlog

if exist %WSDir%\LoginSrv\CountLog RD/S /Q %WSDir%\LoginSrv\CountLog
md %WSDir%\LoginSrv\CountLog

if exist %WSDir%\LoginSrv\IdLog RD/S /Q %WSDir%\LoginSrv\IdLog
md %WSDir%\LoginSrv\IdLog

if exist %WSDir%\LogServer\BaseDir RD/S /Q %WSDir%\LogServer\BaseDir
md %WSDir%\LogServer\BaseDir

if exist %WSDir%\Mir200\Log RD/S /Q %WSDir%\Mir200\Log
md %WSDir%\Mir200\Log

if exist %WSDir%\Mir200\ConLog RD/S /Q %WSDir%\Mir200\ConLog
md %WSDir%\Mir200\ConLog

if exist %WSDir%\Mir200\Envir\Market_prices RD/S /Q %WSDir%\Mir200\Envir\Market_prices
md %WSDir%\Mir200\Envir\Market_prices

if exist %WSDir%\Mir200\Envir\Market_saved RD/S /Q %WSDir%\Mir200\Envir\Market_saved
md %WSDir%\Mir200\Envir\Market_saved

echo 玩家资料清除成功. . .
echo 正在退出. . .
exit