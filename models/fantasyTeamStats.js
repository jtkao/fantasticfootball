var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var season = require("./season.js");
var player = require("./player.js");
var fantasyTeam = require("./fantasyTeam.js");

var fantasyTeamStats = sequelize.define('t_fantasy_team_stats', {
	season_id: Sequelize.INTEGER,
	week_id: Sequelize.INTEGER,
	player_id: int,
	fantasy_team_id_a: Sequelize.INTEGER,
	fantasy_team_id_b: Sequelize.INTEGER,
	fantasy_team_a_score: Sequelize.INTEGER,
	fantasy_team_b_score: Sequelize.INTEGER
});

fantasyTeamStats.season_id.belongsTo(season);
fantasyTeamStats.player_id.belongsToMany(player);
fantasyTeamStats.fantasy_team_id_a.belongsToMany(fantasyTeam);
fantasyTeamStats.fantasy_team_id_b.belongsToMany(fantasyTeam);

fantasyTeamStats.sync();

module.exports = fantasyTeamStats;
