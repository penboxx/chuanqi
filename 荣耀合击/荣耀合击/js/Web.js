function MsgBox(SetUrl)
{
	var diag88 = new Dialog();
	IsOpenMsgBox=1;
	diag88.Width = 900;
	diag88.Height = 500;
	diag88.Title = "";
	diag88.URL = SetUrl;
	diag88.show();
}
