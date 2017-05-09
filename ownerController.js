// dummy data
var rawActive = require("./public/assets/logic/data.js");
var bench = require("./public/assets/logic/dummyBenchOnly.js");
var dummyRosterTwo = require("./public/assets/logic/dummyRoster2.js");

// actually need these 
var loadActive = require("./public/assets/logic/loadActivePlayers.js");
var activeMatchup = require("./public/assets/logic/activematchup.js");
var prepareBenchHtml = require("./public/assets/logic/prepareBenchHtml.js");


module.exports = function(app) {

    // switch active and bench players on roster
    app.get('/oer', function(req, res) {
        var benchPlayers = prepareBenchHtml(bench);
        var activePlayer = loadActive(rawActive);

        var hdbData = activePlayer;
        hdbData["bench"] = benchPlayers;
        console.log(hdbData);

        res.render("oer", hdbData);
    });

    // load matchups
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

    // populate waivers
    app.get("/oww", function(req,res){
        // will need data for all available players
        res.render("oww", {available:rawActive})
    });

    // 
    app.post("/oww", function(req,res){
        console.log(req.body);
        res.end();
    })

    app.post("/api/:id", function(req,res){
        // modal of player season stats
        var playerId = req.params.id;
        console.log(playerId);
        res.end();
    })

    app.post("/api/add/:id", function(req, res) {
        var playerId = req.params.id;
        console.log(playerId);
        res.end();
    })

    app.put("/oer", function(req,res){
        console.log(req.body);
        res.end();
    })
}
