/*
now = new Date(),hour = now.getHours()
if(hour < 6){document.write("�賿��!")}
else if (hour < 9){document.write("���Ϻ�!")}
else if (hour < 12){document.write("�����!")}
else if (hour < 14){document.write("�����!")}
else if (hour < 17){document.write("�����!")}
else if (hour < 19){document.write("�����!")}
else if (hour < 22){document.write("���Ϻ�!")}
else {document.write("ҹ���!")}
*/

function Hellow_Word(){
	var day = new Array();
	day[0] = "������";
	day[1] = "����һ";
	day[2] = "���ڶ�";
	day[3] = "������";
	day[4] = "������";
	day[5] = "������";
	day[6] = "������";
	var now = new Date();
	var yy = now.getFullYear();
	var mo = now.getMonth()+1;
	var dd = now.getDate();
	var ww = day[now.getDay()];
	var hh = now.getHours();
	var mm = now.getMinutes();
	var ss = now.getTime() % 60000;
	ss = (ss - (ss % 1000)) / 1000;
	var clock = hh+':';
	if (mm < 10) clock += '0';
	clock += mm+':';
	if (ss < 10) clock += '0';
	clock += ss;
	var cl = '';
	if (now.getDay() == 0) cl = '';
	if (now.getDay() == 6) cl = '';
//	return('<span style=\'color:#848484;\'>'+ cl +yy + '��' + mo + '��' + dd + '��&nbsp;' + clock + '&nbsp;' + ww + '</span>');
	return('<span style=\'color:#848484;\'>'+ cl +yy + '��' + mo + '��' + dd + '��&nbsp;' + ww + '</span>');
}

/*
function refreshCalendarClock(){
//	document.all.calendarClock.innerHTML = Hellow_Word();
	document.getElementById('calendarClock').innerHTML = Hellow_Word();
}
document.write('<font id="calendarClock"></font>');
refreshCalendarClock();
setInterval('refreshCalendarClock()',1000);
*/
document.write('<font id="calendarClock">'+ Hellow_Word() +'</font>');
