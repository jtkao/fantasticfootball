// THIS WILL BE BROKEN UP INTO CONTROLLERS
var roster = require("./public/assets/logic/data.js")
var rosterb = require("./public/assets/logic/dummyRoster2.js")
var nflteams = require("./public/assets/logic/nflteam_data.js")
var positions = require("./public/assets/logic/position_data.js")

var express = require("express");
var router = express.Router();

/// **********************************************************************************OWNER

var benchData = function(list){
	var data = [];

	for (var i = 0; i < list.length; i++){
		var player = {};
		player.name = list[i].name;
		player.id = list[i].id;
		player.benchSlot = "bench" + (i + 1) + "Slot";
		player.class = "bench" + (i + 1);
		player.buttonID = "swap" + (i + 1);
		player.selectionButtonID = "selectToSwitch" + (i + 1);
		data.push(player);
	}

	return data;
}

router.get("/oer", function(err,res){
	var test = roster.splice(12)
	var benchPlayers = benchData(test);
	console.log(benchPlayers)

	var hb_data = {
			qb:roster[0], 
			rb1:roster[1],
			rb2:roster[2],
			flex:roster[3],
			wr1:roster[4],
			wr2:roster[5],
			te:roster[6],
			k: roster[7],
			lb: roster[8],
			s: roster[9],
			c: roster[10],
			dl: roster[11],
			player:benchPlayers
		}

	res.render("oer", hb_data);
});

router.get("/omu", function(err,res){
	var test = roster.splice(12)
	var testb = rosterb.splice(12)
	var benchPlayers = benchData(test);

	var hb_data = {
			// team a
			ffname_a: "MAGIC CITY WIZARDS",
			qb_a:roster[0], 
			rb1_a:roster[1],
			rb2_a:roster[2],
			flex_a:roster[3],
			wr1_a:roster[4],
			wr2_a:roster[5],
			te_a:roster[6],
			k_a: roster[7],
			lb_a: roster[8],
			s_a: roster[9],
			c_a: roster[10],
			dl_a: roster[11],
			player_a:benchPlayers,
			
			// team b
			ffname_b: "NON MAGICAL JAVASCRIPT WIZARDS",
			qb_b:rosterb[0], 
			rb1_b:rosterb[1],
			rb2_b:rosterb[2],
			flex_b:rosterb[3],
			wr1_b:rosterb[4],
			wr2_b:rosterb[5],
			te_b:rosterb[6],
			k_b: rosterb[7],
			lb_b: rosterb[8],
			s_b: rosterb[9],
			c_b: rosterb[10],
			dl_b: rosterb[11],
			player_b:benchPlayers
		}
	res.render("omu", hb_data)
});

router.get("/oww", function(err,res){
	res.render("oww", {teams:nflteams, position:positions})
});

module.exports = router;
