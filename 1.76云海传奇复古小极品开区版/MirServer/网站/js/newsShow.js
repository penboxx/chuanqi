// ��ʼ��
$(function (){

	// ���ݼ���
	try {
		if ($id('voteMode').value>0){
			try {
				AjaxGetDealToIdJs(dbPathPart +'news_deal.asp?mudi=vote&dataID='+ $id('infoID').value +'&dbPathPart='+ escape(dbPathPart),'voteBox');
			}catch (e) {}
		}	

		// ���ۼ���
		LoadReplyList($id('infoID').value);
	}catch (e) {}

	$('#newsContent div,#newsContent span').removeClass('clear');
	ContentImgDeal();
	setTimeout("ContentImgDeal()",1000);

	try {
		CheckSendContent();
		CheckReplyMaxLen();
	}catch (e) {}

});

function ContentImgDeal(){
//	$('#newsContent img').click(function (){
//		var a=window.open(this.src);
//	});
	$('#newsContent img').each(function (i){
//		this.style.margin='5px 0 0 0';
		if (this.width>665){
			this.width=665;
//			this.alt='����鿴ԭͼ';
//			this.style.cursor='pointer';
			$(this).after("<div style='margin:0 auto;width:100px;margin-bottom:5px;'><a href='"+ $(this).attr('src') +"' target='_blank' style='font-size:12px;color:red;' title='��ͼƬԭͼ�����赥���ô��ſɲ鿴��ԭͼ��'>[����鿴ԭͼ]</a></div>");
		}
	});
}

// ����Ƿ�����������
function CheckSendContent(){
	if ($id('isUserCheck').value=="1"){
		AjaxGetDealToId(dbPathPart +"news_deal.asp?mudi=contentSend&dataID="+ $id('infoID').value +"&page="+ $id('pageValue').value +"&dbPathPart="+ escape(dbPathPart),"newsContent");
	}
}

// ȷ���Ķ�
function CutScoreBtn(){
	AjaxGetDealToId(dbPathPart +"news_deal.asp?mudi=contentSend&dataID="+ $id('infoID').value +"&page="+ $id('pageValue').value +"&dbPathPart="+ escape(dbPathPart) +"&isCut=true","newsContent");
}

// ��ҳ����
function ContentPageHref(modeStr,infoID,pageNum,mode1Url){
	if (modeStr!=""){
		AjaxGetDealToId(dbPathPart +"news_deal.asp?mudi=contentSend&dataID="+ infoID +"&page="+ pageNum +"&dbPathPart="+ escape(dbPathPart), modeStr);
	}else{
		document.location.href=mode1Url.replace("[page]",pageNum);
	}
}

// ͶƱ��ʽ
function VoteStyle(){
	// ����ͶƱ
	$(".webBox .d li").hover(function() { 
			$(this).addClass("font2_2 fontB");
		}, function(){
			$(this).removeClass("font2_2 fontB");
	});

	// ����ͶƱ
	$(".webBox .d .upDown .up").hover(function() { 
			$(this).addClass("up2");
		}, function(){
			$(this).removeClass("up2");
	});
	$(".webBox .d .upDown .down").hover(function() { 
			$(this).addClass("down2");
		}, function(){
			$(this).removeClass("down2");
	});
}

// ͶƱ���
var isUseVote=false
function VoteDeal(num){
	if (isUseVote==true){
		alert('����ͶƱ�������Ժ���Ͷ.');return false;
	}
	AjaxGetDealToIdNo(dbPathPart +'news_deal.asp?mudi=vote&dataID='+ $id('infoID').value +'&selItem='+ num +'&dbPathPart='+ escape(dbPathPart),'voteBox','��֤�����');
	isUseVote = true;
}


// ���ۻظ�
function CheckReplyForm(){
	if ($id('replyContent').value==""){
		alert('�������ݲ���Ϊ��');$id('replyContent').focus();return false;
	}
	if ($id('replyContent').value.length<5){
		alert('�������ݲ�������5�ַ�');$id('replyContent').focus();return false;
	}
	strMaxLen = parseInt($id('replyContentMaxLen').value);
	if (strMaxLen>0 && $id('replyContent').value.length>strMaxLen){
		alert('�������ݳ������'+ strMaxLen +'�ַ�����');$id('replyContent').value=$id('replyContent').value.substring(0,strMaxLen);CalcReplyLen();return false;
	}
	if ($id('replyUser').value==""){
		alert('�ǳƲ���Ϊ��');$id('replyUser').focus();return false;
	}
	try {
		if ($id('verCode').value==""){
			alert('��֤�벻��Ϊ��');$id('verCode').focus();return false;
		}
	}catch (e) {}
	AjaxPostDeal("replyForm");
	return false;
}


// ��ȡ��������Ϣ
function LoadReplyList(repID){
	$id("replyList").innerHTML = "<center style='padding:10px;'><img src='"+ dbPathPart +"inc_img/onload.gif' style='margin-right:5px;' />���ݼ�����...</center>"+ $id("replyList").innerHTML;
	AjaxGetDealToId(dbPathPart +"news_deal.asp?mudi=messageSend&dataID="+ repID +'&dbPathPart='+ escape(dbPathPart),"replyList");
}


// ���ظ������ַ�
function CheckReplyMaxLen(){
	try {
		strMaxLen = parseInt($id('replyContentMaxLen').value);
		if (strMaxLen>0){
			$id('conMaxLenBox').innerHTML = "(<span id='conCurrLen'>0</span>/"+ strMaxLen +")&nbsp;";
			$('#replyContent').keyup(function (){
				CalcReplyLen();
			});
		}
	}catch (e) {}
}

// ����ظ������ַ���
function CalcReplyLen(){
	try {
		$id('conCurrLen').innerHTML = $id('replyContent').value.length;
	}catch (e) {}
}