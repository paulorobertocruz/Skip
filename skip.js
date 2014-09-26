if(window.location.href.indexOf("http://www.animakai.me/prot.php?")>=0){		
	$("img").removeAttr("src");
	$("script").removeAttr("src");
	window.location.replace($("#link").attr('href'));
}
else if(window.location.href.indexOf("http://adf.ly/")>=0){
	
	#solução de https://gist.github.com/aslian
	#https://gist.github.com/alexdrk/6113685
	
	var adflyLink, lnk;
	var g_cnt = 0;
	var scriptContent = document.getElementsByTagName('head')[0].innerHTML;

	lnk = scriptContent.match(/ysmm[^;]+;/g);
	if(lnk.length){
		lnk = lnk[0].replace(/(^[^'"]+['"])([^'"]+)(['"]\;$)/, "$2");

		var p1 = '', p2 = '';
		for(var z = 0; z <= lnk.length; z++){
			if(z%2 == 0)
				p1 += lnk.charAt(z);
			else
				p2 = lnk.charAt(z) + p2;
		}
		adflyLink = atob(p1 + p2).substr(2);
	}
	//alert(adflyLink);
	window.location.replace(adflyLink);

}
