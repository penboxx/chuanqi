// ��ȡԪ��id
function $id(str){
	return document.getElementById(str);
}

// ��ȡԪ��name
function $name(str){
	return document.getElementsByName(str);
}

// ��Option��textֵ����toID�ı���
// Ӧ������ onchange="OptionTextTo('labItemID','labItemName');"
function OptionTextTo(sourceID,toID){
	document.getElementById(toID).value=document.getElementById(sourceID).options[document.getElementById(sourceID).selectedIndex].text;
}


// �����ַ������ֽ���
/*function Str_Byte(str){
	strLen = str.length;
	//str=str.replace(/[^\w\u4E00-\u9FA5]/g, '')
	str=str.replace(/[^\x00-\xff]/g, '');
	strLen2 = str.length;
	strTotalLen = strLen2 + (strLen - strLen2) * 2;
	return strTotalLen;
}*/

// �ж��Ƿ��������
function Str_IsSign(str){
	var txt=new RegExp("[ ,\\`,\\~,\\!,\\@,\#,\\$,\\%,\\^,\\+,\\*,\\&,\\\\,\\/,\\?,\\|,\\:,\\.,\\<,\\>,\\{,\\},\\(,\\),\\',\\;,\\=,\"]");
    //�����ַ�������ʽ
    if (txt.test(str)){
        return true;
    }else{
		return false;
	}
}


// �����ַ������ֽ���
function Str_Byte(str){
	var newStr = 0;
//	newStr=str.replace(/[^\u7F51\u949B\u5DE5\u4F5C\u5BA4]/g, '***');
	newStr=str.replace(/[^\u0000-\u00ff]/g, '***');
	return newStr.length;
}

// �������ĺϷ��ԡ����Ϸ�������-1
function IsMail(str){
	if (str.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)!=-1){
		return true;
	}else{
		return false;
	}
}

// ����ļ����Ƿ�ΪͼƬ�ļ�
function IsImgFile(fileValue){
	var re = new RegExp("\.(gif|jpg|jpeg|png|bmp)","ig");
	return re.test(fileValue)
}


function Weather114la(num){
	document.write("<iframe width='540' height='22' frameborder='0' scrolling='no' allowtransparency='true' src='"+ dbPathPart +"tools/weather/index"+ num +".html'></iframe>");
}

function AddFavorite(sURL, sTitle){    
	try{
		window.external.addFavorite(sURL, sTitle);
	}catch (e){
		try{
			window.sidebar.addPanel(sTitle, sURL, "");
		}catch (e){
			alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
		}
	}
}

function SetHome(obj,vrl){
	try{
		obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
	}catch(e){
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}catch (e){
				alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ�� [signed.applets.codebase_principal_support]��ֵ����Ϊ'true',˫�����ɡ�");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage',vrl);
		}
	}
}

// �����ַ���
// Ӧ������ onkeyup="if (this.value!=FiltChar(this.value)){this.value=FiltChar(this.value)}"
// Ӧ������ onkeyup="this.value=FiltChar(this.value)"
function FiltChar(str){
	return str.replace(/[^\w\u4E00-\u9FA5]/g, '');
}


// ����С��
// Ӧ������ onkeyup="if (this.value!=FiltDecimal(this.value)){this.value=FiltDecimal(this.value)}"
// Ӧ������ onkeyup="this.value=FiltDecimal(this.value)"
function FiltDecimal(str){
	return str.replace(/[^\d*\.?\d{0,2}$]/g,'')
}

// ��������
// Ӧ������ onkeyup="if (this.value!=FiltInt(this.value)){this.value=FiltInt(this.value)}"
// Ӧ������ onkeyup="this.value=FiltInt(this.value)"
function FiltInt(str){
	return str.replace(/\D/g,'')
}

// ����JS�ļ�
function LoadJsFile(fileId,filePath,mode){
	var scriptTag = document.getElementById(fileId);
	var headObj = document.getElementsByTagName('head').item(0);
	if(scriptTag){
		if (mode==1){
			headObj.removeChild(scriptTag);
			jsFile = document.createElement('script');
			jsFile.src = filePath;
			jsFile.type = 'text/javascript';
//			jsFile.defer = 'defer';
			jsFile.id = fileId;
			headObj.appendChild(jsFile);
		}
	}else{
		jsFile = document.createElement('script');
		jsFile.src = filePath;
		jsFile.type = 'text/javascript';
//		jsFile.defer = 'defer';
		jsFile.id = fileId;
		headObj.appendChild(jsFile);
	}
}

// ����CSS�ļ�
function LoadCssFile(fileId,filePath,mode){
	var cssTag = document.getElementById(fileId);
	var headObj = document.getElementsByTagName('head').item(0);
	if(cssTag){
		if (mode==1){
			headObj.removeChild(cssTag);
			cssFile = document.createElement('link');
			cssFile.href = filePath;
			cssFile.rel = 'stylesheet';
			cssFile.type = 'text/css';
			cssFile.id = fileId;
			headObj.appendChild(cssFile);
		}
	}else{
		cssFile = document.createElement('link');
		cssFile.href = filePath;
		cssFile.rel = 'stylesheet';
		cssFile.type = 'text/css';
		cssFile.id = fileId;
		headObj.appendChild(cssFile);
	}
} 




// ���������������������
function SelectOptionArr(selectName){
	var SelectOptionArray = new Array();

	for (soi=0; soi<document.getElementById(selectName).options.length; soi++){
		SelectOptionArray[document.getElementById(selectName).options[soi].value] = document.getElementById(selectName).options[soi].text;
	}
	return SelectOptionArray;
}

// ���������ݼ���
function SelectOptionSearch(sourceID,selectName,arrObj){
	document.getElementById(selectName).options.length=0;
	for (var key in arrObj){
		if (arrObj[key].lastIndexOf(document.getElementById(sourceID).value)>=0){
			document.getElementById(selectName).options.add(new Option(arrObj[key],key));
		}
	}
}

// ��������������
function SelectOptionClear(selectName,defText){
	document.getElementById(selectName).options.length=0; 
	document.getElementById(selectName).options.add(new Option(defText,""));
	document.getElementById(selectName).value = "";
}

// �����ĵط�����ַ���
function FocusAddText(inputId,str){
	var ubb=document.getElementById(inputId);
	var ubbLength=ubb.value.length;
	ubb.focus();
	if(typeof document.selection !="undefined"){
		document.selection.createRange().text=str;  
	}else{
		ubb.value=ubb.value.substr(0,ubb.selectionStart)+str+ubb.value.substring(ubb.selectionStart,ubbLength);
	}
}


// ��������(��ȡID���ڵ�value)
function ValueToCopy(id){
	copy = $id(id).value
	if (window.clipboardData){
		window.clipboardData.setData("Text", copy);
	}else if (window.netscape){
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if (!clip) return;
		var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if (!trans) return;
		trans.addDataFlavor('text/unicode');
		var str = new Object();
		var len = new Object();
		var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copytext=copy;
		str.data=copytext;
		trans.setTransferData("text/unicode",str,copytext.length*2);
		var clipid=Components.interfaces.nsIClipboard;
		if (!clip) return false;
		clip.setData(trans,null,clipid.kGlobalClipboard);
	}
	alert("���Ƴɹ�")
	return false;
}



if (typeof(dbPathPart) == "undefined"){ dbPathPart = ""; }

// �ı���֤��
function ChangeCode(){
	try {
		$id("showcode").src=dbPathPart +"inc/VerCode"+ SYS_verCodeMode +".asp?mudi="+ Math.random();
		$id("verCode").value = "";
		$id("verCode").focus();
	}catch (e) {}
}

// �����֤����ȡ��֤��
function GetVerCode(str,lyjForm,lyjId){
	try {
		if ($id("showVerCode").innerHTML.lastIndexOf('VerCode')==-1){
			$id("showVerCode").innerHTML = "<img id='showcode' src='"+ dbPathPart +"inc/VerCode"+ SYS_verCodeMode +".asp?mudi="+ Math.random() +"' align='top' style='cursor:pointer;' onclick='ChangeCode()' alt='�������' />";	
		}else if (str == "change"){
			ChangeCode();
		}
	}catch (e) {}
}


// Ajax��������
function AjaxNavHref(){
	var outputID = arguments[0] ? arguments[0] : "";
	var urlStr = arguments[1] ? arguments[1] : "";
	var pageNum = arguments[2] ? arguments[2] : "";

	if (outputID==""){ outputID="dialogBody"; }
	if (urlStr==""){ urlStr=document.location.href; }
	if (! isNaN(parseInt(pageNum))){ pageNum="&page="+ pageNum; }else{ pageNum=""; }

	document.getElementById(outputID).innerHTML="<br /><br /><center style='font-size:14px;'><img src='"+ dbPathPart +"inc_img/onload.gif' style='margin-right:5px;' />���ݼ�����...</center><br /><br />";
	$.ajaxSetup({cache:false});
	$.get(dbPathPart + urlStr + pageNum, function(result){
		document.getElementById(outputID).innerHTML=result;
		try {
			backNavBtn = document.getElementById("backAjaxNavHeader").href;
			if (backNavBtn.indexOf ("#")!=-1){
				webCurrUrl = document.location.href;
				if (webCurrUrl.indexOf ("#")>-1){
					webCurrUrl=webCurrUrl.substring(0,webCurrUrl.lastIndexOf("#"));
				}
				webCurrUrl=webCurrUrl +"#"+ backNavBtn.substring(backNavBtn.lastIndexOf("#")+1,backNavBtn.length);
//				alert(webCurrUrl);
				document.getElementById("backAjaxNavHeader").href = webCurrUrl;
				setTimeout("document.getElementById('backAjaxNavHeader').click();",300);
			}
		}catch (e) {}
		});
}


	ajaxDealStr = "���ݴ�����...";
	ajaxLoadStr = "���ݶ�ȡ��...";

// POST��AJAX����
function AjaxPostDeal(formName){
	try {
		document.getElementById("loadingStr").innerHTML = "<span style='font-size:14px;'><img src='"+ dbPathPart +"inc_img/onload.gif' style='margin-right:5px;' />"+ ajaxDealStr +"</span>";
	}catch (e) {}

	formNameObj = document.getElementById(formName);
	var formNameUrl = formNameObj.getAttribute("action"), formNameContent = formValueToStr(formNameObj);
	$.post(formNameUrl,formNameContent,function(result){
		try {
			document.getElementById("loadingStr").innerHTML = "";
		}catch (e) {}
		eval(result.replace(/<\s*(script[^>]*)>([\s\S][^<]*)<\/\s*script>/gi,"$2"));
		try {
			document.getElementById("loadingStr").innerHTML = "";
		}catch (e) {}
	});
	return false;
}

// ͨ����name��ȡ�ñ�����Ԫ�ز����GET�ַ���
function formValueToStr(formObj) {
	var qstr = "", and = "", elem, value;
	for(var i = 0; i< formObj.length; ++i) {
		elem = formObj[i];
		if (elem.name!='') {
			value=undefined;
			switch(elem.type) {
				case "select-one":
					if(elem.selectedIndex > -1) {
						value = elem.options[elem.selectedIndex].value;
					}
					else {
						value = "";
					}
					break;
				case"select-multiple":
					var selMul=elem.options;
					for(var w=0;w<selMul.length;++w){
						if(selMul[w].selected){
							qstr += and+elem.name+"="+escape(selMul[w].value);
							and = "&";
						}
					}
					break;
				case "checkbox":
				case "radio":
					if (elem.checked == true) {
						value = elem.value;
					}
					break;
				default:
					value = elem.value;
			}
			if(value!=undefined){
				value = escape(value);
				qstr += and + elem.name + "=" + value;
				and = "&";
			}
		}
	}
	return qstr;
}


// GET�ύAJAX����
function AjaxGetDeal(urlStr){
	$.ajaxSetup({cache:false});
	$.get(urlStr, function(result){
		eval(result.replace(/<\s*(script[^>]*)>([\s\S][^<]*)<\/\s*script>/gi,"$2"));
	});
	return false;
}


// GET�ύAJAX����
function AjaxGetDealToAlert(urlStr){
	$.ajaxSetup({cache:false});
	$.get(urlStr, function(result){
		alert(result.replace(/<\s*(script[^>]*)>([\s\S][^<]*)<\/\s*script>/gi,"$2"));
	});
	return false;
}


// GET�ύAJAX����
function AjaxGetDealToId(urlStr,outputID){
	$.ajaxSetup({cache:false});
	$.get(urlStr, function(result){
		document.getElementById(outputID).innerHTML = result;
	});

	return false;
}

// GET�ύAJAX����
function AjaxGetDealToIdNo(urlStr,outputID,badWords){
	$.ajaxSetup({cache:false});
	$.get(urlStr, function(result){
		if (result.lastIndexOf(badWords)!=-1){
			eval(result.replace(/<\s*(script[^>]*)>([\s\S][^<]*)<\/\s*script>/gi,"$2"));
		}else{
			document.getElementById(outputID).innerHTML = result;
		}
	});
	return false;
}

// GET�ύAJAX��������ִ��JS��
function AjaxGetDealToIdJs(urlStr,outputID){
	$.ajaxSetup({cache:false});
	$.get(urlStr, function(result){
		set_innerHTML(outputID,result);
		try {
			VoteStyle();
		}catch (e) {}
	});

	return false;
}




/* innerhtml.js
 * Copyright Ma Bingyao <andot@ujn.edu.cn>
 * Version: 1.9
 * LastModified: 2006-06-04
 * This library is free.  You can redistribute it and/or modify it.
 */

var global_html_pool = [];
var global_script_pool = [];
var global_script_src_pool = [];
var global_lock_pool = [];
var innerhtml_lock = null;
var document_buffer = "";

// js�������ִ��js�ű���obj_id��innerHTML��ID��html������ַ�����time����ʱ������ִ�У����Ժ���
function set_innerHTML(obj_id, html, time){
	if (innerhtml_lock == null) {
		innerhtml_lock = obj_id;
	}
	else if (typeof(time) == "undefined") {
		global_lock_pool[obj_id + "_html"] = html;
		window.setTimeout("set_innerHTML('" + obj_id + "', global_lock_pool['" + obj_id + "_html']);", 10);
		return;
	}
	else if (innerhtml_lock != obj_id) {
		global_lock_pool[obj_id + "_html"] = html;
		window.setTimeout("set_innerHTML('" + obj_id + "', global_lock_pool['" + obj_id + "_html'], " + time + ");", 10);
		return;
	}

	function get_script_id() {
		return "script_" + (new Date()).getTime().toString(36) + Math.floor(Math.random() * 100000000).toString(36);
    }

	document_buffer = "";

	document.write = function (str) {
		document_buffer += str;
	}
	document.writeln = function (str) {
		document_buffer += str + "\n";
	}

	global_html_pool = [];

	var scripts = [];
	html = html.split(/<\/script>/i);
	for (var i = 0; i < html.length; i++) {
		global_html_pool[i] = html[i].replace(/<script[\s\S]*$/ig, "");
		scripts[i] = {text: '', src: '' };
		scripts[i].text = html[i].substr(global_html_pool[i].length);
		scripts[i].src = scripts[i].text.substr(0, scripts[i].text.indexOf('>') + 1);
		scripts[i].src = scripts[i].src.match(/src\s*=\s*(\"([^\"]*)\"|\'([^\']*)\'|([^\s]*)[\s>])/i);
		if (scripts[i].src) {
			if (scripts[i].src[2]) {
				scripts[i].src = scripts[i].src[2];
			}
			else if (scripts[i].src[3]) {
				scripts[i].src = scripts[i].src[3];
			}
			else if (scripts[i].src[4]) {
				scripts[i].src = scripts[i].src[4];
			}
			else {
				scripts[i].src = "";
			}
			scripts[i].text = "";
		}
		else {
			scripts[i].src = "";
			scripts[i].text = scripts[i].text.substr(scripts[i].text.indexOf('>') + 1);
			scripts[i].text = scripts[i].text.replace(/^\s*<\!--\s*/g, "");
		}
	}

	var s;
	if (typeof(time) == "undefined") {
		s = 0;
	}
	else {
		s = time;
	}

	var script, add_script, remove_script;

	for (var i = 0; i < scripts.length; i++) {
		var add_html = "document_buffer += global_html_pool[" + i + "];\n";
		add_html += "document.getElementById('" + obj_id + "').innerHTML = document_buffer;\n";
		script = document.createElement("script");
		if (scripts[i].src) {
			script.src = scripts[i].src;
			if (typeof(global_script_src_pool[script.src]) == "undefined") {
				global_script_src_pool[script.src] = true;
				s += 2000;
			}
			else {
				s += 10;
			}
		}
		else {
			script.text = scripts[i].text;
			s += 10;
		}
		script.defer = true;
		script.type =  "text/javascript";
		script.id = get_script_id();
		global_script_pool[script.id] = script;
		add_script = add_html;
		add_script += "document.getElementsByTagName('head').item(0)";
		add_script += ".appendChild(global_script_pool['" + script.id + "']);\n";
		window.setTimeout(add_script, s);
		remove_script = "document.getElementsByTagName('head').item(0)";
		remove_script += ".removeChild(document.getElementById('" + script.id + "'));\n";
		remove_script += "delete global_script_pool['" + script.id + "'];\n";
		window.setTimeout(remove_script, s + 10000);
	}

	var end_script = "if (document_buffer.match(/<\\/script>/i)) {\n";
	end_script += "set_innerHTML('" + obj_id + "', document_buffer, " + s + ");\n";
	end_script += "}\n";
	end_script += "else {\n";
	end_script += "document.getElementById('" + obj_id + "').innerHTML = document_buffer;\n";
	end_script += "innerhtml_lock = null;\n";
	end_script += "}";
	window.setTimeout(end_script, s);
}
