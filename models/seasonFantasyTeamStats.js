//var Sequelize = require("sequelize");
var season = require("./season.js");
var fantasyTeam = require("./fantasyTeam.js");

module.exports = function(sequelize, DataTypes) {

    var SeasonFantasyTeamStats = sequelize.define('t_season_fantasy_team_stats', {
        season_id: DataTypes.INTEGER,
        fantasy_team_id: DataTypes.INTEGER,
        fantasy_score: DataTypes.INTEGER, // aggregate of active player fantasy score week over week
        win_ct: DataTypes.INTEGER,
        loss_ct: DataTypes.INTEGER,
        tie_ct: DataTypes.INTEGER
    // }, {
    //     tableName: 'fantasyTeam',
    //     classMethods: {
    //         associate: function(models) {
    //             seasonFantasyTeamStats.season_id.belongsTo(season),
    //                 seasonFantasyTeamStats.fantasy_team_id.belongsToMany(fantasyTeam)
    //         }
    //     }
    });

    return SeasonFantasyTeamStats;
};
