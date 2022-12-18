
// ∑÷“≥¡¥Ω”
function ListPageHref(pageNum,mode1Url){
	if (pageNum<2){
		document.location.href=mode1Url.replace("_[page]","").replace("[page]",pageNum);
	}else{
		document.location.href=mode1Url.replace("[page]",pageNum);
	}
}
