// var roster = require("./data.js");
// var fantasyTeamRoster = require('./fantasyTeamRoster');
// var player = require('./player');

// owner model
// will require ORM

var owner = {

    getSeason: function(){
        // get current season
    }

    getWeek: function(season){
        // get the current week in the season
    }

    // MAX ROSTER SIZE IS 19
    checkRosterSize: function(fantasyTeamID, season) {
        // query the fantasy roster for single User, return size of roster

        var rosterSize;
        fantasyTeamRoster.tx_fantasy_team_roster.count({
            where: ['id = ?', fantasyTeamID]
        }).then(function(count) {
            console.log(count);
            return rosterSize = count;
        });

        // *** this will be used primarily as a conditional in the below addFromWaiver
        // *** to make sure the fantasy roster has space to support another player

    },

    addPlayer: function(playerID, season) {
        // add player to fantasy team
    }

    dropPlayer: function(playerId, season) {
        // this will be a PUT
        // *** change player selected by playerId fantasy_team_id to NULL (or equivalent)

        fantasyTeamRoster.tx_fantasy_team_roster.update({
                fantasy_team_id: null
            }, {
                where: {
                    player_id: playerId
                }
            }
        )
    },

    checkActiveLineup: function(fantasyTeamID, season) {
        // return true if active lineup is full (if number of active players = 12)
        // *** needs names, ids, and position of ALL active players
        // return false if active lineup is not full
        db.sequelize.query(
              'select p.id as player_id, p.fname, p.lname, pos.description as position'
            + 'from t_players p'
                + 'join tx_fantasy_team_rosters tr on tr.player_id = p.id'
                + 'join t_positions pos on pos.id = p.position'
            + 'where tr.active = "Y"'
                + 'and tr.fantasy_team_id = ' + fantasyTeamID + ';'
        ).spread(function(data){
            console.log(data);
        });

        // this will be used
    },

    checkTotalFantasyRoster: function(fantasyTeamID, season) {
        // *** needs names, ids, position of ALL players on fantasy roster
        // *** this will be for loading the "check my roster"  page
        db.sequelize.query(
              'select p.id as player_id, p.fname, p.lname, pos.description as position'
            + 'from t_players p'
                + 'join tx_fantasy_team_rosters tr on tr.player_id = p.id'
                + 'join t_positions pos on pos.id = p.position'
            + 'where tr.fantasy_team_id = ' + fantasyTeamID + ';'
        ).spread(function(data){
            console.log(data);
        });
    },

    getAvailablePlayers: function(season) {
        // get all players that are not on a fatantasy team 

        db.sequelize.query(
                  'select p.id, p.fname, p.lname '
                + 'from t_players p '
                + 'where p.id in ( '
                    + 'select player_id '
                    + 'from tx_fantasy_team_rosters '
                    + 'where fantasy_team_id is null '
                        + 'and season_id = ' + season + ');'
        ).spread(function(data){
            console.log(data);
            
            var availablePlayers = data;
            return availablePlayers;
        });       
    },

   
    getPlayerSeasonStats: function(playerId, season) {
        // get all static player data AND their season stats IF player is not on a fantasy team
        // this is a huge query
        db.sequelize.query(
              'select p.id as player_id, p.fname, p.lname, sum(players_game_fantasy_score) as players_season_fantasy_score '
            + 'from t_game_stats gs '
                + 'join t_players p on p.id = gs.player_id '
            + 'where gs.season_id = ' + season + ' '
                + 'and gs.player_id = ' + player_id + ' '
                + 'and gs.fantasy_team_id is null '
            + 'group by p.id;'
        ).spread(function(data){
            console.log(data);

            var playerSeasonStats = data;
            return playerSeasonStats;
        });
    },

    addPlayerFromWaiver: function(fantasyTeamID, availableplayerId, rosterplayerId) {
        //@todo? we should discuss. Not usre exactly how to handle but at first thought, seems like we could
            //break this function down into a couple smaller functions
            
        // availableplayerId = the id of the player on waivers that the user is selecting to add to their fantasy team
        // front end: user selects player
        // code then...
        // check if roster has available space (checkRosterSize)
        // if there is space, rosterplayerId = "999999"
        // front end: allow user to add player 

        // if there no space
        // front end: buttons pop up that let you select player to exchange

        // waiver player is added to bench

        // *** this function will call the above checkRosterSize() to make sure # of players on fantasy team <=19
        // *** if # of players < 19, player selected by the passed availableplayerId will change
        // *** fantasy_team_id to reflect the User 
        // *** if # of player = 19, User will have to select player to drop (thereby calling dropPlayer())
    },

    benchPlayer: function(playerId) {
        // PUT request changes player active status to "bench"

        //@todo bench for the game or on the team or both? 
        //There's an "active" field in both t_game_stats and tx_fantasy_team_roster
        db.sequelize.query(

              'update tx_fantasy_team_rosters '
            + 'set active = "N" '
            + 'where player_id = ' + playerId + ';'

              'update t_game_stats '
            + 'set active = "N" '
            + 'where player_id = ' + playerId + ';'

        ).spread(function(data){
            console.log(data);
        });
    },

    checkPlayerPosition: function(playerId) {
        // GET the player's position
        // *** this function is only going to be used in conjunction with activatePlayer() below

        db.sequelize.query(
              'select pos.description as position '
            + 'from t_players p '
                + 'join t_positions pos on pos.id = p.position '
            + 'where p.id = ' + playerId + ';'

        ).spread(function(data){
            console.log(data);
        });
    },

    activatePlayer: function(playerId) {
        // *** checkPlayerPosition will return the player's position
        // *** in the front end, IF this matches with the slot selected on the fantasy roster
        // *** this function (activatePlayer()) will trigger

        // PUT request changes player active status to "active"

        //@todo activate for the game or on the team or both? 
        //There's an "active" field in both t_game_stats and tx_fantasy_team_roster
        db.sequelize.query(

              'update tx_fantasy_team_rosters '
            + 'set active = "Y" '
            + 'where player_id = ' + playerId + ';'

              'update t_game_stats '
            + 'set active = "Y" '
            + 'where player_id = ' + playerId + ';'

        ).spread(function(data){
            console.log(data);
        });
    }

};

//console.log(roster);
