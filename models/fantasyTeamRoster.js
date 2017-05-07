var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var season = require("./season.js");
var player = require("./player.js");
var fantasyTeam = require("./fantasyTeam.js");

var fantasyTeamRoster = sequelize.define('tx_fantasy_team_roster', {
	season_id: Sequelize.INTEGER,
	week_id: Sequelize.INTEGER,
	player_id: Sequelize.INTEGER,
	fantasy_team_id: Sequelize.INTEGER,
	active: Sequelize.STRING(1),
	join_dt: Sequelize.DATE,
	left_dt: Sequelize.DATE,
});

fantasyTeamRoster.season_id.belongsTo(season);
fantasyTeamRoster.player_id.belongsToMany(player);
fantasyTeamRoster.fantasy_team_id.belongsToMany(fantasyTeam);

fantasyTeamRoster.sync();

module.exports = fantasyTeamRoster;
