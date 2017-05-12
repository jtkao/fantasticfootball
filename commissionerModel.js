var db = require("./models")

var commissionerModel = {


    createPlayer: function(newPlayer) {

        db.sequelize.query(
            'select id from t_position where description = "' + newPlayer.position + '";'
        ).then(function(positionId) {

            db.sequelize.query('insert t_player (fname, lname, position, nfl_team, jersey_number, createdAt, updatedAt)' + 'values ("' + newPlayer.firstName + '","' + newPlayer.lastName + '",' + positionId[0][0].id + ',"' + newPlayer.nflTeam + '",' + newPlayer.number + ', now(), now());')
            .then(function() {

                db.sequelize.query('SELECT `id` FROM `t_season` WHERE `active` = "Y";')
                .then(function(now) {
                    console.log(now);
                    var activeSeaon = now[0][0].id;

                    db.sequelize.query('SELECT `id` FROM `t_player` WHERE `fname` = ' + '"' + newPlayer.firstName + '"' + ' AND `lname` =' + '"' + newPlayer.lastName + '"' + ' AND `jersey_number` =' + '"' + newPlayer.number + '"' + ' AND `nfl_team` =' + '"' + newPlayer.nflTeam + '";')
                    .then(function(id) {
                        console.log(id);
                        var playerId = id[0][0].id;

                        commissionerModel.createPlayerStatsAll(id[0][0].id, activeSeaon);
                    });
                });
            });
        });
    },

    createPlayerStatsAll: function(playerId, season) {
        // 16 rows, one for each week
        var week_id = 1

        while (week_id <= 16) {

            db.sequelize.query(
                'insert into t_game_stats (season_id, week_id, player_id, createdAt, updatedAt)' + 'values (' + season + ',' + week_id + ',' + playerId + ', now(), now());'
            )

            week_id++;
        }
    },

    getScoringValues: function(commissionerId, cb) {
        // get scoring values

        db.sequelize.query(
            'select * from t_commissioner where id = ' + commissionerId + ';'
        ).then(function(data) {
            cb(data);
        });
    },

    updatePlayerGameStats: function(seasonId, weekId, playerId, statsObject) {
        // this is what happens on comcr
        // create entry in player game stats table

        db.sequelize.query(
            'update t_game_stats ' + 'set passing_yd = ' + statsObject.passYd + ', ' + 'rushing_yd = ' + statsObject.rushYd + ', ' + 'receiving_yd = ' + statsObject.recYd + ', ' + 'passing_td = ' + statsObject.passTd + ', ' + 'rushing_td = ' + statsObject.rushTd + ', ' + 'receiving_td =  ' + statsObject.recTd + ', ' + 'reception =  ' + statsObject.numRec + ', ' + 'interception =  ' + statsObject.int + ', ' + 'fumble =  ' + statsObject.fumble + ', ' + 'field_goal =  ' + statsObject.fg + ', ' + 'sacks =  ' + statsObject.sack + ', ' + 'tackles =  ' + statsObject.tackle + ', ' + 'two_point_conversion = ' + statsObject.tpc + ' where season_id = ' + seasonId + ' and week_id = ' + weekId + ' and player_id = ' + playerId
        )
    }

    // function updateExistingGameStats(object){
    //  // object will have player id, the season, and the week
    //  // these three values will determine what to target in query
    //  // if value in object === "unchanged", then dont change the value
    // }

};

module.exports = commissionerModel;
