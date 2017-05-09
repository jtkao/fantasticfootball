// dummy data
var rawActive = require("./public/assets/logic/data.js");
var bench = require("./public/assets/logic/dummyBenchOnly.js");
var nflteams = require("./public/assets/logic/nflteam_data.js");
var positions = require("./public/assets/logic/position_data.js");
var dummyRosterTwo = require("./public/assets/logic/dummyRoster2.js");

// actually need these 
var loadActive = require("./public/assets/logic/loadActivePlayers.js");
var activeMatchup = require("./public/assets/logic/activematchup.js");
var prepareBenchHtml = require("./public/assets/logic/prepareBenchHtml.js");


module.exports = function(app) {
    app.get('/oer', function(req, res) {
        var benchPlayers = prepareBenchHtml(bench);
        var activePlayer = loadActive(rawActive);

        var hdbData = activePlayer;
        hdbData["bench"] = benchPlayers;
        console.log(hdbData);

        res.render("oer", hdbData);
    });

    app.get('/omu', function(req, res){
    	var benchPlayersTeamA = prepareBenchHtml(bench);
    	var benchPlayersTeamB = prepareBenchHtml(bench);

        var activePlayerTeamA = activeMatchup(rawActive, "a");
        var activePlayerTeamB = activeMatchup(dummyRosterTwo, "b");

    	var hdbData = Object.assign({}, activePlayerTeamA, activePlayerTeamB);
        hdbData["bench_player_a"] = benchPlayersTeamA;
        hdbData["bench_player_b"] = benchPlayersTeamB;

        console.log(hdbData)

        res.render("omu", hdbData);
    });

    app.get("/oww", function(req,res){
        res.render("oww", {teams:nflteams, position:positions, available:rawActive})
    });

    app.put("/oer", function(req,res){
        console.log(req.body);
        res.end();
    })
}
