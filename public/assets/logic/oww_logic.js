$(document).ready(function(){

	$("#submit_sort").on("click", function(){
		var sortTeam = $("#sortby_team").val();
		var sortPosition = $("#sortby_position").val();
		var sortOrder = $("#sortby_position").val();

		var sorted = {
			"team":sortTeam,
			"position":sortPosition,
			"order":sortOrder
		};

		$.post("/oww", sorted);
	});


	$(".showSeasonStats").on("click", function(){
		var playerId = this.id;

		var url = "/api/" + playerId;
		console.log(playerId,url)

		$.get(url);
	});

	$(".addMe").on("click", function(){
		var playerId = this.id;

		var url = "/api/add/" + playerId;
		console.log(playerId,url)

		$.ajax({
			url: url,
			method: 'PUT',
			data: playerId
		})
	});
})