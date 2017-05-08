//var Sequelize = require("sequelize");
var gameStats = require("./gameStats.js");
var fantasyTeamRoster = require("./fantasyTeamRoster.js");
var fantasyTeamStats = require("./fantasyTeamStats.js");
var seasonFantasyTeamStats = require("./seasonFantasyTeamStats.js");

module.exports = function(sequelize, DataTypes) {

    var season = sequelize.define('t_season', {
        description: DataTypes.STRING,
        active: DataTypes.STRING
    // }, {
    //     tableName: 'fantasyTeam',
    //     classMethods: {
    //         associate: function(models) {
				// season.belongsToMany(gameStats)
				// season.belongsToMany(fantasyTeamRoster)
    //         }
    //     }
    });

    return season;
};
