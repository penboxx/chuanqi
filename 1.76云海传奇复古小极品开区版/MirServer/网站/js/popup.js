// ���ɲ㴰��
function OpenPopup(){
	CheckJsPopup();
	CheckJsUsers();
	try {
		document.getElementById("dialogBody").innerHTML = "<br /><br /><br /><br /><br /><br /><center style='font-size:14px;'><img src='"+ dbPathPart +"inc_img/onload.gif' style='margin-right:5px;' />"+ lang["ajaxLoadStr"] +"</center><br /><br /><br /><br /><br /><br /><br />";		
		CheckShadow();
	}catch (e) {}

	var str = arguments[0] ? arguments[0] : "";
	var otherStr = arguments[1] ? arguments[1] : "";
	var otherStr2 = arguments[2] ? arguments[2] : "";

	if (otherStr==undefined){ otherStr=""; }
	switch (str){
		case "reg":
			regWaitTime = 0;
			popTitle	= "��Աע��";
			popWidth	= 650;
			popHeight	= 260;
			popHref		= dbPathPart +"users.asp?mudi=reg&dbPathPart="+ escape(dbPathPart) + otherStr;
			break;

		case "login":
			popTitle	= "��Ա��¼";
			popWidth	= 400;
			popHeight	= 160;
			popHref		= dbPathPart +"users.asp?mudi=login&dbPathPart="+ escape(dbPathPart) + otherStr;
			break;

		case "missPwd":
			popTitle	= "��������";
			popWidth	= 400;
			popHeight	= 160;
			popHref		= dbPathPart +"users.asp?mudi=missPwd&dbPathPart="+ escape(dbPathPart) + otherStr;
			break;

		case "userCenter":
			popTitle	= "��Ա����";
			popWidth	= 850;
			popHeight	= 400;
			popHref		= dbPathPart +"usersCenter.asp?mudi=&dbPathPart="+ escape(dbPathPart) + otherStr;
			break;

		case "revInfo":
			popTitle	= "�޸���Ϣ";
			popWidth	= 850;
			popHeight	= 400;
			popHref		= dbPathPart +"usersCenter.asp?mudi=revInfo&dbPathPart="+ escape(dbPathPart) + otherStr;
			break;

		case "addNews":
			CheckJsNicEdit();
			wNewsWaitTime = 0;
			popTitle	= "��������";
			popWidth	= 850;
			popHeight	= 500;
			popHref		= dbPathPart +"usersCenter.asp?mudi=addNews&dbPathPart="+ escape(dbPathPart) + otherStr;
			break;

		case "revNews":
			CheckJsNicEdit();
			wNewsWaitTime = 0;
			popTitle	= "�޸�����";
			popWidth	= 850;
			popHeight	= 500;
			popHref		= dbPathPart +"usersCenter.asp?mudi=revNews&dbPathPart="+ escape(dbPathPart) + otherStr;
			break;

		case "newsManage":
			popTitle	= "���¹���";
			popWidth	= 850;
			popHeight	= 400;
			popHref		= dbPathPart +"usersCenter.asp?mudi=newsManage&dbPathPart="+ escape(dbPathPart) + otherStr;
			break;

		case "rss":
			popTitle	= "RSS����";
			popWidth	= 550;
			popHeight	= 240;
			popHref		= dbPathPart +"rss.asp?mudi=web&dbPathPart="+ escape(dbPathPart) + otherStr;
			break;

		default:
			try {
				var pop=new Popup({ contentType:2,isReloadOnClose:false});
				pop.close();
			}catch (e) {}
			return false;
			break;
	}

	$.ajaxSetup({cache:false});
	$.get(popHref, function(result){
		strHtml = result;
		var pop=new Popup({ contentType:2,isReloadOnClose:false,width:popWidth,height:popHeight});
		pop.setContent("contentHtml",strHtml);
		pop.setContent("title",popTitle);
		pop.build();
		pop.show();
//		document.getElementById("dialogBody").innerHTML = result;
		PopupEvent(str);
	});

}

var editorObjTime;
// ����Popup�󴥷����¼�
function PopupEvent(str){
	if (str=="addNews" || str=="revNews"){
		editorObjTime = setTimeout("LoadEditor('content',500);",500);
	
	}else if (str=="revInfo"){
		CheckRevInfoType();

	}else if (str=="login"){
//setTimeout("$id('username').focus();",500);

	}else if (str=="rss"){
		SetRssUrl();

	}
}

// ���ر༭��
function LoadEditor(str,minSec) {
	CheckJsNicEdit();
	KE.init({
		id : 'content',
		allowUpload : false,
		minWidth : 506,
		minHeight : 220,
		newlineTag : 'p',
		cssPath : [dbPathPart +'tools/kindeditor.css'],
		items : [
			'source', '|', 'fullscreen', 'undo', 'redo', 'selectall', '|', 'cut', 'copy', 'paste',
			'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
			'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
			'superscript', '-',
			'title', 'fontname', 'fontsize', '|', 'textcolor', 'bgcolor', 'bold',
			'italic', 'underline', 'strikethrough', 'removeformat', '|', 'image',
			'flash', 'media', 'advtable', 'hr', 'link', 'unlink', '|', 'about'
		],
		afterCreate : function(id) {
			KE.util.focus(id);
		}
	});
	setTimeout("KE.create('content');",minSec);

}


function SetRssUrl(){
	$id('rssValue').value=$id('rssUrl').value +"?typeStr="+ $id('rssTypeStr').value +"&maxNum="+ $id('rssMaxNum').value;
}


// �ı���֤��
function PopupChangeCode(){
	try {
		$id("popVerCodeImg").src=dbPathPart +"inc/VerCode"+ SYS_verCodeMode +".asp?mudi="+ Math.random();
		$id("popVerCode").value = "";
		$id("popVerCode").focus();
	}catch (e) {}
}

// �����֤����ȡ��֤��
function PopupGetVerCode(str,lyjForm,lyjId){
	try {
		if ($id("popVerCodeStr").innerHTML.lastIndexOf('VerCode')==-1){
			$id("popVerCodeStr").innerHTML = "<img id='popVerCodeImg' src='"+ dbPathPart +"inc/VerCode"+ SYS_verCodeMode +".asp?mudi="+ Math.random() +"' align='top' style='cursor:pointer;' onclick='PopupChangeCode()' alt='�������' />";	
		}else if (str == "change"){
			PopupChangeCode();
		}
	}catch (e) {}
}
