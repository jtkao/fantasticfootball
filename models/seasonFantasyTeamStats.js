var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var season = require("./season.js");
var fantasyTeam = require("./fantasyTeam.js");

var seasonFantasyTeamStats = sequelize.define('t_season_fantasy_team_stats', {
	season_id: Sequelize.INTEGER,
		// foreign key (season_id) references t_season (id),
	fantasy_team_id: Sequelize.INTEGER,
		// foreign key (fantasy_team_id) references t_fantasy_team (id),
	fantasy_score: Sequelize.INTEGER, // aggregate of active player fantasy score week over week
	win_ct: Sequelize.INTEGER,
	loss_ct: Sequelize.INTEGER,
	tie_ct: Sequelize.INTEGER
});

seasonFantasyTeamStats.season_id.belongsTo(season);
seasonFantasyTeamStats.fantasy_team_id.belongsToMany(fantasyTeam);

seasonFantasyTeamStats.sync();

module.exports = seasonFantasyTeamStats;