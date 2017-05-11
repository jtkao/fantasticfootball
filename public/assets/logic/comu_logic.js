$(document).ready(function(){
	$("#comu_submit_all").on("click", function(){

		var playerName = $("#updated_player").val().trim();
		var season = $("#updated_season").val().trim();
		var week = $("#updated_week").val().trim();

		var passTd = $("#updated_pass_td").val();
		var rushTd = $("#updated_rush_td").val();
		var recTd = $("#updated_rec_td").val();

		var passYd = $("#updated_pass_yd").val();
		var rushYd = $("#updated_rush_yd").val();
		var recYd = $("#updated_rec_yd").val();

		var numRec = $("#updated_num_rec").val();
		var fg = $("#updated_fg").val();
		var tpc = $("#updated_tpc").val();

		var fumble = $("#updated_fumble").val();
		var int = $("#updated_int").val();

		var tackle = $("#updated_sack").val();
		var sack = $("#updated_tackle").val();

		var updatedStats = {
			"id": playerName,
			"season": season,
			"week": week,
			"passTd": passTd,
			"rushTd": rushTd,
			"recTd": recTd,
			"passYd": passYd,
			"rushYd": rushYd,
			"recYd": recYd,
			"numRec": numRec,
			"fg": fg,
			"tpc": tpc,
			"fumble": fumble,
			"int": int,
			"tackle": tackle,
			"sack": sack
		};

		$.ajax({
            url: "/comu",
            type: 'PUT',
            data: updatedStats
        });
	})
});