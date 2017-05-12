var commissionerModel = require("../commissionerModel.js")
var scoring = require("../public/assets/logic/scoring.js")
var db = require("../models")

module.exports = function(app) {

    app.get("/comse", function(req, res) {
        res.render("comse", { title: 'commissioner setup', layout: "com_main" });
    })

    app.post("/comse", function(req, res) {
        console.log(req.body);
        res.end();
    });

    app.put("/comu", function(req, res) {
        console.log(req.body);

        db.sequelize.query(
                'SELECT `passing_yd`, `rushing_yd`, `receiving_yd`, `passing_td`, `rushing_td`, ' + '`receiving_td`, `reception`, `interception`, `fumble`, `field_goal`, `sacks`, `tackles`, `two_point_conversion` ' + 'FROM `t_commissioners` WHERE `id` = "1"')
            .then(function(rubric) {
                var scoreRubric = (rubric[0][0])

                db.sequelize.query('SELECT `position` FROM `t_players` WHERE `id` = ' + '"' + req.body.id + '"')
                    .then(function(id) {
                        console.log("COMU RAW PLAYER ID, ", id[0])
                        var playerId = id[0][0]
                        var fantasyPoints = scoring.playerScore(scoreRubric, playerId, req.body);
                        console.log(fantasyPoints)

                        db.sequelize.query('UPDATE `t_game_stats` ' + 'SET `passing_yd` =' + ' "' + req.body.passing_yd + '"' + ', `rushing_yd` =' + ' "' + req.body.rushing_yd + '"' + ', `receiving_yd` =' + ' "' + req.body.receiving_yd + '"' + ', `passing_td` =' + ' "' + req.body.passing_td + '"' + ', `rushing_td` =' + ' "' + req.body.rushing_td + '"' + ', `receiving_td` =' + ' "' + req.body.receiving_td + '"' + ', `reception` =' + ' "' + req.body.reception + '"' + ', `interception` =' + ' "' + req.body.interception + '"' + ', `fumble` =' + ' "' + req.body.fumble + '"' + ', `field_goal` =' + ' "' + req.body.field_goal + '"' + ', `sacks` =' + ' "' + req.body.sacks + '"' + ', `tackles` =' + ' "' + req.body.tackles + '"' + ', `two_point_conversion` =' + ' "' + req.body.two_point_conversion + '"' + ', `players_game_fantasy_score` =' + ' "' + fantasyPoints + '" ' + 'WHERE `season_id` =' + ' "' + req.body.season + '"' + ' AND `week_id` = ' + ' "' + req.body.week + '"' + ' and `player_id` = ' + ' "' + req.body.id + '";')
                        .then(function() {
                            res.end();
                        })
                    })
            })
    });

    app.post("/comcr", function(req, res) {
        console.log("HELLO")
        console.log(req.body);

        commissionerModel.createPlayer(req.body);

        res.end();
    })


    app.get("/comu", function(req, res) {
        console.log("hello");

        db.sequelize.query('SELECT * FROM `t_seasons`')
            .then(function(season) {
                var seasonData = season[0];

                db.sequelize.query('SELECT * FROM `t_players`').then(function(player) {
                    var playerData = player[0];

                    res.render("comu", {
                        title: 'commissioner update',
                        layout: "com_main",
                        season: seasonData,
                        player: playerData
                    })
                })
            });
    });

    app.get("/comcr", function(req, res) {
        res.render("comcr", { title: 'commissioner create', layout: "com_main" });
    });

};
