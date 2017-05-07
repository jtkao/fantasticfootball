var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var gameStats = require("./gameStats.js");
var fantasyTeamRoster = require("./fantasyTeamRoster.js");
var fantasyTeamStats = require("./fantasyTeamStats.js");
var seasonFantasyTeamStats = require("./seasonFantasyTeamStats.js");

var fantasyTeam = sequelize.define('t_fantasy_team', {
	description: Sequelize.STRING
});

fantasyTeam.belongsToMany(gameStats);
fantasyTeam.belongsToMany(fantasyTeamRoster);

fantasyTeam.sync();

module.exports = fantasyTeam;