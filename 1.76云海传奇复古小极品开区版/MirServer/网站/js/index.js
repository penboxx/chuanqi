var MyMar,speed;

$(function (){
	try {
		//�������
		speed=30;
		if ($id('caseMarX').offsetWidth<$id('caseMarX1').offsetWidth){
			$id('caseMarX2').innerHTML=$id('caseMarX1').innerHTML;
			$id('caseMarX3').innerHTML=$id('caseMarX1').innerHTML;
		}
		MyMar=setInterval(Marquee,speed)
		$id('caseMarX').onmouseover=function() { clearInterval(MyMar); }
		$id('caseMarX').onmouseout=function() { MyMar=setInterval(Marquee,speed); }
	}catch (e) {}

	try {
		$('.newMessItem').mouseover(function (){
			$(this).addClass('fontU');
			$(this).hover(function (){
			}, function (){
				$(this).removeClass('fontU');
			});
		});
	}catch (e) {}
});

	function Marquee(){
		try {
			if($id('caseMarX2').offsetWidth-$id('caseMarX').scrollLeft<=0){
				$id('caseMarX').scrollLeft-=$id('caseMarX1').offsetWidth;
			}else{
				$id('caseMarX').scrollLeft+=1.8;
			}
		}catch (e) { clearInterval(MyMar); }
	}


// ���ͶƱ��
function CheckVoteForm(formID){
	var isSel=false;
	for (var i=0; i<$name('voteItem'+ formID).length; i++){
		if ($name('voteItem'+ formID)[i].checked){
			isSel = true;
		}
	}
	if (isSel==false){
		alert('����ѡ����ҪͶƱ��ѡ��');return false;
	}

	AjaxPostDeal("voteForm"+ formID);
	return false;
}

// ��ȡͶƱ���
function ReadVoteResult(formID){
	$.ajaxSetup({cache:false});
	$.get(dbPathPart +"deal.asp?mudi=voteResult&dataID="+ formID, function(result){
		if (result.length<50){
			eval(result);
		}else{
			document.getElementById('voteResultBox'+ formID).innerHTML = result;
			$id('voteResultBox'+ formID).style.display="";
			$id('voteBox'+ formID).style.display="none";
		}
	});
	return false;

}

// �ر�ͶƱ���
function CloseVoteResult(formID){
	$id('voteResultBox'+ formID).style.display="none";
	$id('voteBox'+ formID).style.display="";

}
