$(
function(){initial();})
function initial(){
	var path = ["image/weed.jpg","image/teafarm.png","image/teafarm2.jpg"]
	var i=1;
	$("#displayer").attr("src",path[0]);
		setInterval(function(){
			$("#displayer").attr("src",path[i]);
			i=i==2?0:(i+1);
		},2000);
	
	
}
function resize() { 
	var font_size = $(".nav").width()/60;
	console.log(font_size);
	$("*").css("font-size",font_size+"px");
}