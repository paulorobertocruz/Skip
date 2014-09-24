$(document).ready(function(){
    
    $("#cleanlinks").click(function(){
        $("a").each(function(){
            alert($(this).attr('href'));    
        });
        
    });
    
});