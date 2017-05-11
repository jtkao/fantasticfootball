//var Sequelize = require("sequelize");
var season = require("./season.js");
var player = require("./player.js");
var fantasyTeam = require("./fantasyTeam.js");

module.exports = function(sequelize, DataTypes) {
    var FantasyTeamStats = sequelize.define('t_fantasy_team_stats', {
        season_id: DataTypes.INTEGER,
        week_id: DataTypes.INTEGER,
        player_id: DataTypes.INTEGER,
        fantasy_team_id_a: DataTypes.INTEGER,
        fantasy_team_id_b: DataTypes.INTEGER,
        fantasy_team_a_score: DataTypes.INTEGER,
        fantasy_team_b_score: DataTypes.INTEGER
    // }, {
    //     tableName: 'fantasyTeamStats',
    //     classMethods: {
    //         associate: function(models) {
    //             fantasyTeamStats.season_id.belongsTo(season),
    //             fantasyTeamStats.player_id.belongsToMany(player),
    //             fantasyTeamStats.fantasy_team_id_a.belongsToMany(fantasyTeam),
    //             fantasyTeamStats.fantasy_team_id_b.belongsToMany(fantasyTeam)
    //         }
    //     }
    });

    return FantasyTeamStats;
};
