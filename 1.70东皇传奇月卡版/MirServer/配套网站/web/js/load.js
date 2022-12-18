$(document).ready(function(){
	$("#more .btnmore").mouseenter(function(){
		$(this).parent().find(".morebox").fadeIn(300)
	})
	$("#more").mouseleave(function(){	$(this).find(".morebox").fadeOut(300)})

	   
	if ($(".scrollleft").length>0)
		{
				$(".scrollleft").imgscroll({
					speed: 50,    //图片滚动速度
					amount: 0,    //图片滚动过渡时间
					width: 2,     //图片滚动步数
					dir: "left"   // "left" 或 "up" 向左或向上滚动
				});	
	
		}	   
	   
$(".closewindow").live("click",function(){$("#window").empty().remove();})
	   
})


//弹窗口
function show(file,width,height)
{	
	$("#window").empty().remove();
	$("body").append('<div id="window"><div id="float_window"><iframe src="'+file+'" style="width:'+width+';height:'+height+';background-color:transparent;overflow:hidden;" scrolling="no" frameborder="0" allowtransparency="true" id="popupFrame" name="popupFrame" width="100%" height="100%"></iframe><span class="closewindow"></span></div></div>')
	$("#window").css("height",$(window).height()).show()
	$("#float_window").css({"width":width,"height":height,"margin-left":"-"+parseInt(width/2)+"px","margin-top":"-"+parseInt(height/2)+"px"})
}

//关闭窗口
function closewindow(){$("#window").empty().remove();}					
					