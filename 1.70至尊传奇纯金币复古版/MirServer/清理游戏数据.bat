@echo off
title Http://www.gm005.Com ����汾���ؿ������������� 
color 0A
ECHO ��������������������������������������������������������
ECHO ���ޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡީ�
ECHO ��   ��רҵ����汾 www.gm005.com  QQ��156598018��    ��
ECHO ���ޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡީ� 
ECHO ��      ÿ�ո���5-10����ҵ�����汾��ϵQQ156598018     ��
ECHO ���ޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡީ�
ECHO ���ޡޡޡޡް��κμ����������������!!!!�ޡޡޡޡޡޡީ�
ECHO ��������������������������������������������������������
ECHO ����ߡ�ߡ�ߴ˴��������ݵ���ϷĿ¼Ϊ��%CD%  ��
ECHO ��                                                    ��
ECHO ���ߡ�ߡ�ߡ��������ȷ�������رմ��������ݡ�ߡ�ߡ੦    
ECHO ��������������������������������������������������������
ECHO ������������ǰ,�뱸���������,����ȷ����Ϸ��ֹͣ����
ECHO ���ޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡޡީ� 
ECHO ��������������������������������������������������������  
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

echo �����������ɹ�. . .
echo �����˳�. . .
exit