var db = require("../models")
var ownerModel = require("../ownerModel.js")

// dummy data
var rawActive = require("../public/assets/logic/data.js");
var bench = require("../public/assets/logic/dummyBenchOnly.js");
var dummyRosterTwo = require("../public/assets/logic/dummyroster2.js");

// actually need these 
var loadActive = require("../public/assets/logic/loadActivePlayers.js");
var activeMatchup = require("../public/assets/logic/activematchup.js");
var prepareBenchHtml = require("../public/assets/logic/prepareBenchHtml.js");

// dummy scoring rubric
// TESTING FOR OMU

var testRubric = { "passTd": 5, "rushTd": 6, "recTd": 6, "passYd": 20, "rushYd": 10,
  "recYd": 10, "numRec": 1, "fg": 3, "tpc": 2, "fumble": 2, "int": 2, "tackle": 1, "sack": 4  
  };

var dummyStats = require("../public/assets/logic/dummyStats.js");
var scoring = require("../public/assets/logic/scoring.js");


// controller 
module.exports = function(app) {

    // switch active and bench players on roster
    // !!!! FANTASY TEAM ID IS DUMMY 

    app.get('/oer', function(req, res) {
        var fantasyTeamId = 2;

        db.sequelize.query('SELECT * FROM `t_players` WHERE `fantasy_team_id` = ' + fantasyTeamId + ';')
        .then(function(rosterData){
            var roster = rosterData[0];
            var activeRoster = loadActive(roster);
            var benchRoster = prepareBenchHtml(roster);

            activeRoster["bench"] = benchRoster;

            res.render("oer", activeRoster);
        })
    });

    // load matchups
    app.get('/omu', function(req, res){
        // will need to get both rosters
        // will need this week in season stats 

        // THERE MUST BE SEASON STAT DATA OR THE APP WILL CRASH.

    	var benchPlayersTeamA = prepareBenchHtml(bench);
    	var benchPlayersTeamB = prepareBenchHtml(bench);

        var activePlayerTeamA = activeMatchup(rawActive, "a");
        var activePlayerTeamB = activeMatchup(dummyRosterTwo, "b");

        var teamScoreA = scoring.teamFantasyScore(activePlayerTeamA, testRubric, dummyStats);
        var teamScoreB = scoring.teamFantasyScore(activePlayerTeamB, testRubric, dummyStats);

    	var hdbData = Object.assign({}, activePlayerTeamA, activePlayerTeamB);

        scoring.addScore(hdbData, testRubric, dummyStats);

        scoring.addScoreBench(benchPlayersTeamA, testRubric, dummyStats);
        scoring.addScoreBench(benchPlayersTeamB, testRubric, dummyStats);

        hdbData["bench_player_a"] = benchPlayersTeamA;
        hdbData["bench_player_b"] = benchPlayersTeamB;
        hdbData["scoreA"] = teamScoreA
        hdbData["scoreB"] = teamScoreB

        res.render("omu", hdbData);
    });

    // populate waivers
    app.get("/oww", function(req,res){
        // will need data for all available players
        db.sequelize.query('SELECT * FROM `t_players` WHERE `fantasy_team_id` is null;')
        .then(function(waiverData){
            var data = waiverData[0];

            var hdbData = [];

            for (var i = 0; i < data.length; i++) {
                var temp = {};

                temp["name"] = data[i].fname + " " + data[i].lname;
                temp["id"] = data[i].id;

                hdbData.push(temp);
            }

            res.render("oww", {available:hdbData})
        })
    });

    
    app.post("/oww", function(req,res){
        console.log(req.body);
        res.end();
    })

    app.get("/api/:id", function(req,res){
        // modal of player season stats
        var playerId = req.params.id;
        console.log(playerId);
        res.end();
    })

    // oww
    // !!!! FANTASY TEAM ID
    // !!!! CHECK ROSTER SIZE
    app.put("/api/add/:id", function(req, res) {
        var playerId = req.params.id;
        console.log(playerId);

        var fantasyTeamId = 2;

        db.sequelize.query('UPDATE `t_players` SET `fantasy_team_id` = ' 
            + fantasyTeamId + ' WHERE `id` =' + playerId + ';').then(function(result){
                console.log(result);
                res.end();
            })
    });

    // make bench player active player
    app.put("/oer", function(req,res){
        console.log(req.body);

        db.sequelize.query('UPDATE `t_players` SET `active` = "N" WHERE `id` = ' + req.body["moveToBench[id]"] + ';')
        .then(function(){
                db.sequelize.query('UPDATE `t_players` SET `active` = "Y" WHERE `id` = ' + req.body["makeActive[id]"] + ';')
                .then(function(){
                    res.end();
                })
            })
    });

    // works
    app.put("/api/drop/:id", function(req,res){
        var playerId = req.params.id;

        db.sequelize.query('UPDATE `t_players` SET `fantasy_team_id` = NULL WHERE `id` = ' + playerId);

        res.end();
    });

};
