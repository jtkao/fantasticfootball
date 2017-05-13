$(document).ready(function(){
	$("#comu_submit_all").on("click", function(){

		var playerName = $("#updated_player").val().trim();
		var season = $("#updated_season").val().trim();
		var week = $("#updated_week").val().trim();

		var passing_td = $("#updated_pass_td").val();
		var rushing_td = $("#updated_rush_td").val();
		var receiving_td = $("#updated_rec_td").val();

		var passing_yd = $("#updated_pass_yd").val();
		var rushing_yd = $("#updated_rush_yd").val();
		var receiving_yd = $("#updated_rec_yd").val();

		var reception = $("#updated_num_rec").val();
		var field_goal = $("#updated_fg").val();
		var two_point_conversion = $("#updated_tpc").val();

		var fumble = $("#updated_fumble").val();
		var interception = $("#updated_int").val();

		var tackles = $("#updated_tackle").val();
		var sacks = $("#updated_sack").val();

		var updatedStats = {
			"id": playerName,
			"season": season,
			"week": week,
			"passing_td": passing_td,
			"rushing_td": rushing_td,
			"receiving_td": receiving_td,
			"passing_yd": passing_yd,
			"receiving_yd" : receiving_yd,
			"rushing_yd": rushing_yd,
			"reception": reception,
			"field_goal": field_goal,
			"two_point_conversion": two_point_conversion,
			"fumble": fumble,
			"interception": interception,
			"tackles": tackles,
			"sacks": sacks
		};

		$.ajax({
            url: "/comu",
            type: 'PUT',
            data: updatedStats
        }).then(window.location = "/comu")
	})
});