//var Sequelize = require("sequelize");
var gameStats = require("./gameStats.js");
var fantasyTeamRoster = require("./fantasyTeamRoster.js");
var fantasyTeamStats = require("./fantasyTeamStats.js");
var seasonFantasyTeamStats = require("./seasonFantasyTeamStats.js");

module.exports = function(sequelize, DataTypes) {

    var Season = sequelize.define('t_season', {
        description: DataTypes.STRING,
        active: DataTypes.STRING,
        active_week: DataTypes.INTEGER,
        start_year: DataTypes.INTEGER,
        end_year: DataTypes.INTEGER
    // }, {
    //     tableName: 'fantasyTeam',
    //     classMethods: {
    //         associate: function(models) {
				// season.belongsToMany(gameStats)
				// season.belongsToMany(fantasyTeamRoster)
    //         }
    //     }
    });

    return Season;
};
