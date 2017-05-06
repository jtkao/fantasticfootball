$(document).ready(function(){
	
	$("#go_comse").on("click", function(){
		console.log("yes");

		$.get("/comse")
	});
})