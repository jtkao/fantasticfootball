var active = require("./public/assets/logic/data.js");
var bench = require("./public/assets/logic/dummyBenchOnly.js");
var nflteams = require("./public/assets/logic/nflteam_data.js");
var positions = require("./public/assets/logic/position_data.js");


var prepareBenchHtml = function(list) {
    var data = [];

    for (var i = 0; i < list.length; i++) {
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
};

module.exports = function(app) {
    app.get('/oer', function(req, res) {
        var benchPlayers = prepareBenchHtml(bench);

        var hdbData = {
            qb: active[0],
            rb1: active[1],
            rb2: active[2],
            flex: active[3],
            wr1: active[4],
            wr2: active[5],
            te: active[6],
            k: active[7],
            lb: active[8],
            s: active[9],
            c: active[10],
            dl: active[11],
            player: benchPlayers
        };

        res.render("oer", hdbData);
    });

    app.get('/omu', function(req, res){
    	var benchPlayersTeamA = prepareBenchHtml(bench);
    	var benchPlayersTeamB = prepareBenchHtml(bench);

    	 var hdbData = {
            qb_a: active[0],
            rb1_a: active[1],
            rb2_a: active[2],
            flex_a: active[3],
            wr1_a: active[4],
            wr2_a: active[5],
            te_a: active[6],
            k_a: active[7],
            lb_a: active[8],
            s_a: active[9],
            c_a: active[10],
            dl_a: active[11],
            bench_player_a: benchPlayersTeamA,
            qb_b: active[0],
            rb1_b: active[1],
            rb2_b: active[2],
            flex_b: active[3],
            wr1_b: active[4],
            wr2_b: active[5],
            te_b: active[6],
            k_b: active[7],
            lb_b: active[8],
            s_b: active[9],
            c_b: active[10],
            dl_b: active[11],
            bench_player_b: benchPlayersTeamB
        };

        res.render("omu", hdbData);
    });

    router.get("/oww", function(err,res){
        res.render("oww", {teams:nflteams, position:positions})
    });
}
