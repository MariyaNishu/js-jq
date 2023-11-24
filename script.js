$(document).ready(function(){
	// alert
	$('#btn').on("click",function(){
		alert("ready player one");
	});

	// show/hide
	$('#hide').on("click", function(){
		$('#text').hide();
	});
	$('#show').on("click", function(){
		$('#text').show();
	});
	$('#togg').on("click", function(){
		$('#text').toggle();
	});
	
});

$(document).ready(function(){
	$('#hide').on("click",function(){
		$('#togg').hide();
	});
	
	$('#show').on("click",function(){
		$('#togg').show();
	});
});