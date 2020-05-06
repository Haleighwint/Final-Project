

$(document).ready(function(){


	$("#slider ul li:last-child").prependTo("#slider ul");
			
	$("#buttonleft").click(function(){
		moveLeft();
	});
	
	$("#buttonright").click(function(){
		moveRight();
	});
	
	function moveLeft()
	{
		$("#slider ul").animate({left: "700px"},500,function(){
			$("#slider ul li:last-child").prependTo("#slider ul");
			$("#slider ul").css("left","0");
		});
	}
	
	function moveRight()
	{	
		$("#slider ul").animate({left: "700px"},500,function(){
			$("#slider ul li:first-child").appendTo("#slider ul");
			$("#slider ul").css("left","0");
		});
	}

});