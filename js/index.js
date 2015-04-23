$(
function(){initial();})
function initial(){
	var path = ["image/weed.jpg","image/teafarm.png","image/teafarm2.jpg"]
	$("#displayer").attr("src",path[0]);
	var show = roundshow(path);
	$("#bttnwr div").mouseover(function(){
		clearInterval(show);
		$("#displayer").attr("src",path[$(this).text()-1]);
	});
	$("#bttnwr div").mouseout(function(){
		show = roundshow(path);
	});
	partselect();
}
function resizeFont() { 
	var font_size = $(".nav ul li a").width()/5;
	$("*").css("font-size",font_size+"px");
}
function roundshow(path){
	var i=1;
	var result = setInterval(function(){
		$("#displayer").attr("src",path[i]);
		i=i==2?0:(i+1);
	},2000);
	return result;
}
function partselect(){
	$(".floatopt div").mouseover(function(){
		var id =$(this).attr("id");
		var index = id[id.length-1]
		console.log(index);
		for(var i=0+1;i<$(".floatopt div").length+1;i++){
			if(i == index){
				$("#floatblock"+i).css("display","block");
			}else{
				$("#floatblock"+i).css("display","none");
			}
		}
	})
	
}