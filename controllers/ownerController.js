var db = require("../models")
var ownerModel = require("../ownerModel.js")

// actually need these 
var loadActive = require("../public/assets/logic/loadActivePlayers.js");
var activeMatchup = require("../public/assets/logic/activematchup.js");
var prepareBenchHtml = require("../public/assets/logic/prepareBenchHtml.js");
var muBench = require("../public/assets/logic/muBench.js");
var scoring = require("../public/assets/logic/scoring.js");

module.exports = function(app) {
    
    // OMU
    app.get('/omu', function(req, res){

        // ****** FANTASY TEAM ID
        var idTeamA = 2
        var idTeamB = 12

        db.sequelize.query('SELECT `id`,`fname`,`lname`, `fantasy_team_id`, `position`, `active` FROM `t_players` WHERE `fantasy_team_id` ='  
            + idTeamA + " OR " + idTeamB + ';')
        .then(function(idData){
            var rawIds = idData[0];

            var bigQuery = 'SELECT `player_id`, `players_game_fantasy_score` FROM `t_game_stats` WHERE '

            for (var i = 0; i < rawIds.length; i++) {

                if (i === 0) {
                    bigQuery += '(`player_id` = ' + rawIds[i].id + ' AND `week_id` = ' + 1 + ')'
                } else {
                    bigQuery += ' OR (`player_id` = ' + rawIds[i].id + ' AND `week_id` = ' + 1 + ')'
                }

            };

            // console.log(bigQuery)

            db.sequelize.query(bigQuery).then(function(bigData){

                var bigScore = bigData[0];
                console.log(rawIds, bigScore);
                console.log(rawIds.length, bigScore.length)

                for (player in rawIds) {
                    for (score in bigScore) {
                        if (rawIds[player].id === bigScore[score].player_id) {
                            rawIds[player].score = bigScore[score].players_game_fantasy_score;
                        }
                    }
                }

                // HERE WE FINALLY HAVE ALL THE DATA NEEDED FOR HANDLEBARS
                // console.log(rawIds);
                // console.log(idTeamA, idTeamB);

                rawDataA = [];
                rawDataB = [];

                for (var i = 0; i < rawIds.length; i++) {
                    if (rawIds[i].fantasy_team_id === idTeamA) {
                        rawDataA.push(rawIds[i]);
                    } else if (rawIds[i].fantasy_team_id === idTeamB) {
                        rawDataB.push(rawIds[i]);
                    }
                }

                // console.log(rawDataA +"\n" + rawDataB)

                var benchA = muBench(rawDataA);
                var benchB = muBench(rawDataB);

                var activeA = activeMatchup(rawDataA, "a");
                var activeB = activeMatchup(rawDataB, "b");

                // console.log(activeA);
                // console.log(activeB);

                teamScoreA = 0;
                teamScoreB = 0;

                for (player in activeA) {
                    teamScoreA += activeA[player].score
                };

                for (player in activeB) {
                    teamScoreB += activeB[player].score
                };

                // console.log(teamScoreA, teamScoreB)

                teamScoreA = teamScoreA.toFixed(2);
                teamScoreB = teamScoreB.toFixed(2);

                var hdbData = Object.assign({}, activeA, activeB);

                hdbData["bench_player_a"] = benchA;
                hdbData["bench_player_b"] = benchB;
                hdbData["scoreA"] = teamScoreA;
                hdbData["scoreB"] = teamScoreB;

                // console.log(hdbData);

                db.sequelize.query('SELECT `description` FROM `t_fantasy_teams` WHERE `id` = ' 
                    + idTeamA + ' OR `id` = ' + idTeamB + ';').then(function(names){
                        console.log(hdbData);
                        nameTeamA = names[0][0].description
                        nameTeamB = names[0][1].description

                        hdbData["name_team_a"] = nameTeamA;
                        hdbData["name_team_b"] = nameTeamB;

                        db.sequelize.query('SELECT `bet` FROM `t_fantasy_team_stats` WHERE `fantasy_team_id_a` = ' 
                            + idTeamA + ' AND `fantasy_team_id_b` = ' + idTeamB + ';').then(function(money){
                                var bet = money[0][0].bet;
                                hdbData["bet"] = bet.toFixed(2);

                                console.log(hdbData);
                                res.render('omu', hdbData);
                            })
                    })
            })
        })

    });


    // !!!! OER !!!!
    // !!!! FANTASY TEAM ID IS DUMMY !!!! 
    // LOAD ROSTER OER
    app.get('/oer', function(req, res) {

        // ****** FANTASY TEAM ID
        var fantasyTeamId = 2;

        db.sequelize.query('SELECT * FROM `t_players` WHERE `fantasy_team_id` = ' + fantasyTeamId + ';')
        .then(function(rosterData){
            var roster = rosterData[0];
            var activeRoster = loadActive(roster);
            var benchRoster = prepareBenchHtml(roster);

            activeRoster["bench"] = benchRoster;

            db.sequelize.query('SELECT `description` FROM `t_fantasy_teams` WHERE `id` = ' + fantasyTeamId + ';')
            .then(function(teamName){
                var userTeam = teamName[0][0].description

                activeRoster["logo"] = userTeam;

                res.render("oer", activeRoster);
            })
        })
    });

    // LOAD AVAILABLE PLAYERS OWW
    app.get("/oww", function(req,res){

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

            res.render("oww", {available:hdbData, week:[]})
        })
    });

    // !!!! OWW SORT !!!!
    app.post("/oww", function(req,res){
        console.log(req.body);
        res.end();
    })

    // !!!! MODAL !!!!
    app.get("/api/:id", function(req,res){
        // modal of player season stats
        var playerId = req.params.id;
        console.log(playerId);

        var seasonId = 1;

        db.sequelize.query('SELECT * FROM `t_game_stats` WHERE `player_id` = ' 
            + playerId + ' AND `season_id` = ' + seasonId + ';').then(function(gameData){
                var hdbData = gameData[0];
                console.log(hdbData);

                res.render("oww", {week:hdbData});
            })
    })

    // !!!! oww !!!!
    // !!!! FANTASY TEAM ID !!!!
    // !!!! CHECK ROSTER SIZE !!!!
    app.put("/api/add/:id", function(req, res) {
        var playerId = req.params.id;
        console.log(playerId);

        // ****** FANTASY TEAM ID
        var fantasyTeamId = 2;

        db.sequelize.query('SELECT * FROM `t_players` WHERE `fantasy_team_id` = ' + fantasyTeamId).then(function(num){
            var rosterSize = num[0].length;
            console.log(rosterSize);

            if (rosterSize <= 18) {
                db.sequelize.query('UPDATE `t_players` SET `fantasy_team_id` = ' 
                    + fantasyTeamId + ' WHERE `id` =' + playerId + ';').then(function(result){
                        console.log(result);
                        res.end();
                    })
            } else {
                console.log("ROSTER FULL")
            }
        })
    });

    // BENCH MOVES 
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

    // DROP PLAYER
    app.put("/api/drop/:id", function(req,res){
        var playerId = req.params.id;

        db.sequelize.query('UPDATE `t_players` SET `fantasy_team_id` = NULL, `active` = "N" WHERE `id` = ' + playerId);

        res.end();
    });

};
