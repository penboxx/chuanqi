$(document).ready(function(){
	if ($(".scroll-pane").length>0)
	{
			$('.scroll-pane').jScrollPane({showArrows:true,scrollbarWidth:18,animateTo:true,animateInterval:0,animateStep:5});
		
	}
		
	if ($("#Product_gundong").length>0)
	{
						$('#Product_gundong').jCarouselLite({
							btnPrev: '#btn_prev',
							btnNext: '#btn_next',
							visible:1,
							auto: 2500 ,
							speed: 1000
						});	
		
	}
	
	
	$('#zhiyeTab li').each(function(index){
	if (!$(this).is(".change"))
	{$("#zhiyeTab").parent().find(".Tab_nr:eq("+index+")").hide();}
 
  $(this).mouseover(function()
	{ 
	
	  $('#zhiyeTab li').removeClass('change');
	  $(this).addClass('change');
	  $("#zhiyeTab").parent().find(".Tab_nr").hide();
	  $("#zhiyeTab").parent().find(".Tab_nr:eq("+index+")").show();
	 
	}
  )								   
  })
  
  
	
})



// Crystal Scroll头部滚动
	var posY1 = 0;
	var posY2 = 0;
	var posY3 = 0;
	var imgH = 500;
	setInterval(function(){
		if (posY1 <= -900) posY1 = 0;
		if (posY2 <= -900) posY2 = 0;
		if (posY3 <= -1200) posY3 = 0;
		posY1 -= 1;
		posY2 -= 2;
		posY3 -= 3;
		$('#crystal_01').css({"background-position":'left '+posY1 +'px' });
		$('#crystal_02').css({"background-position":'left '+posY2 +'px' });
		$('#crystal_03').css({"background-position":'left '+posY3 +'px' });
	},50);
  
  
  
  	
