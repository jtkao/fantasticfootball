$(document).ready(function(){

	$(".showSeasonStats").on("click", function(){
		var playerId = this.id;

		console.log("show season stats for pid#", playerId)
		// send get request for season data
		// load in modal
	});

	$(".addMe").on("click", function(){
		var playerId = this.id;
		
		console.log("add", this.id);
	})
})