if(window.location.href.indexOf("http://www.animakai.me/prot.php?")>=0){		
	$("img").removeAttr("src");
	$("script").removeAttr("src");
	window.location.replace($("#link").attr('href'));
}
