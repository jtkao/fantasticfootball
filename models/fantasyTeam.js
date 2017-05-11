//var Sequelize = require("sequelize");
var gameStats = require("./gameStats.js");
var fantasyTeamRoster = require("./fantasyTeamRoster.js");
var fantasyTeamStats = require("./fantasyTeamStats.js");
var seasonFantasyTeamStats = require("./seasonFantasyTeamStats.js");


module.exports = function(sequelize, DataTypes) {
    var FantasyTeam = sequelize.define('t_fantasy_team', {
        description: DataTypes.STRING
    //}
    // , {
    //     tableName: 'fantasyTeam',
    //     classMethods: {
    //         associate: function(models) {
    //             fantasyTeam.belongsToMany(gameStats);
    //             fantasyTeam.belongsToMany(fantasyTeamRoster)
    //         }
    //     }
    });

    return FantasyTeam;
};
