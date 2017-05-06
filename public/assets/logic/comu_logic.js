function getSortVal(selection){
	$(selection).on("change", function(){
		var selected = $(selection).val().trim();

		console.log(selected);
	})
}

$(document).ready(function(){
	
	getSortVal("#comu_season");
	getSortVal("#comu_week");
	getSortVal("#comu_player");
})