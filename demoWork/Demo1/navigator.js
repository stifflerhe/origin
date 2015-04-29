$(function(){
	$("#menubody").mouseover(function(event){
		var item = event.target;
		var top = $(item).offset().top;
		var items ='[{"tag": "商品1","url": "http://www.baidu.com"},{"tag": "商品2","url": "http://www.baidu.com"},{"tag": "商品33",'
		+'"url": "http://www.baidu.com"}]'
        items = JSON.parse(items);
        $("#menucontentcontainer").empty();	
		rendermenucontent(top,items);
	});
})
function rendermenucontent(top,items){
	var html = '<div id ="menucontent">'+'</div>'
	$("#menucontentcontainer").append(html);
	$("#menucontent").css("top",(top-9)+"px")
	console.log(items);
	for(var i = 0;i<items.length;i++){
		var tag = '<p class = "menuoptions"><a href="'+items[i].url+'"">'+items[i].tag+'</a></p>'
		$("#menucontent").append(tag);
	}

}