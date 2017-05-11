var db = require("./models")

var commissionerModel = {


    createPlayer: function(newPlayer) {
        // this is what happens on comu route
        // create entry in static player table

        db.sequelize.query(
            //first get the position ID
            'select id from t_positions where description = "' + newPlayer.position + '";'
            //now do the insert
        ).then(function(positionId) {
            db.sequelize.query(
                'insert t_players (fname, lname, position, nfl_team, jersey_number, createdAt, updatedAt)' + 'values ("' + newPlayer.firstName + '","' + newPlayer.lastName + '",' + positionId[0][0].id + ',"' + newPlayer.nflTeam + '",' + newPlayer.number + ', now(), now());'
            )

            db.t_player.findOne({
                where: {
                    fname: newPlayer.firstName,
                    lname: newPlayer.lastName,
                    nfl_team: newPlayer.nflTeam,
                    jersey_number: newPlayer.number
                },
                attributes: ['id']
            }).then(function(instance) {
                var newPlayerId = instance.dataValues.id;
                commissionerModel.createPlayerStatsAll(newPlayerId, 1);
            })
        })
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

    getScoringValues: function(commissionerId) {
        // get scoring values

        db.sequelize.query(
            'select * from t_commissioners where id = ' + commissionerId + ';'
        ).then(function(data) {
            return data;
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
