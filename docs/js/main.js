$(document).ready(function(){

	let leftWasPressed = false;
	let rightWasPressed = false;



	$("#slider ul li:last-child").prependTo("#slider ul");
			
	$("#buttonleft").click(function(){
		moveLeft();
		leftWasPressed = true;
		rightWasPressed = false;
	});
	
	$("#buttonright").click(function(){
		moveRight();
		leftWasPressed = false;
		rightWasPressed = true;
	});
	
	function moveLeft()
	{

		if(rightWasPressed){
			$("#slider ul").css("left","0");
		}

		$("#slider ul").animate({left: "700px"},500,function(){
			$("#slider ul li:last-child").prependTo("#slider ul");
			$("#slider ul").css("left","0");
		});
	}

	function moveRight()
	{	
		if(leftWasPressed){
			$("#slider ul").css("left","700px");
		}
		$("#slider ul").animate({left: "0"},500,function(){
			$("#slider ul li:first-child").appendTo("#slider ul");
			$("#slider ul").css("left","700px");
		});
	}

	


});

$(document).ready(function(){
  
	$(".modal-button").click(function(){
	  $(".modal").toggle().animate({
		opacity: "1",
	  }, 1000)
	});
	
	$(".modal-background").click(function(){
	  $(".modal").toggle().css("opacity", "0");
	})
	
	$(".modal-close").click(function(){
	  $(".modal").toggle().css("opacity", "0");
	})
	 
  })