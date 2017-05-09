//var Sequelize = require("sequelize");
var season = require("./season.js");
var player = require("./player.js");
var fantasyTeam = require("./fantasyTeam.js");
var nflTeam = require("./nflTeam.js");

module.exports = function(sequelize, DataTypes) {

    var gameStats = sequelize.define('t_game_stats', {
        season_id: DataTypes.INTEGER,
        week_id: DataTypes.INTEGER,
        player_id: DataTypes.INTEGER,
        fantasy_team_id: DataTypes.INTEGER,
        opposing_nfl_team: DataTypes.INTEGER,
        active: DataTypes.STRING,
        passing_yd: DataTypes.INTEGER,
        rushing_yd: DataTypes.INTEGER,
        receiving_yd: DataTypes.INTEGER,
        passing_td: DataTypes.INTEGER,
        rushing_td: DataTypes.INTEGER,
        receiving_td: DataTypes.INTEGER,
        reception: DataTypes.INTEGER,
        interception: DataTypes.INTEGER,
        fumble: DataTypes.INTEGER,
        field_goal: DataTypes.INTEGER,
        sacks: DataTypes.INTEGER,
        tackles: DataTypes.INTEGER,
        two_point_conversion: DataTypes.INTEGER,
        players_game_fantasy_score: DataTypes.INTEGER
    // }, {
    //     tableName: 'gameStats',
    //     classMethods: {
    //         associate: function(models) {
    //             gameStats.season_id.belongsTo(season),
    //             gameStats.player_id.belongsToMany(player),
    //             gameStats.fantasy_team_id.belongsToMany(fantasyTeam),
    //            gameStats.opposing_nfl_team.belongsToMany(nflTeam)
    //         }
    //     }
    });

    return gameStats;
};
