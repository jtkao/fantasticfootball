//var Sequelize = require("sequelize");
var gameStats = require("./gameStats.js");
var fantasyTeamRoster = require("./fantasyTeamRoster.js");
var fantasyTeamStats = require("./fantasyTeamStats.js");

module.exports = function(sequelize, DataTypes) {
	var player = sequelize.define('t_player', {
	    fname: DataTypes.STRING,
	    lname: DataTypes.STRING,
	    position: DataTypes.STRING,
	    nfl_team: DataTypes.STRING,
	    jersey_number: DataTypes.INTEGER
	// }, {
 //        // tableName: 'fantasyTeam',
 //        classMethods: {
 //            associate: function(models) {
	// 			//player.belongsToMany(gameStats)
	// 			player.hasMany(models.tx_fantasy_team_roster, {
	// 				foreignKey: 'player_id'
	// 			})
 //            }
 //        }
    });

	return player;
};