var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var season = require("./season.js");
var player = require("./player.js");
var fantasyTeam = require("./fantasyTeam.js");
var nflTeam = require("./nflTeam.js");

var gameStats = sequelize.define('t_game_stats', {
    season_id: Sequelize.INTEGER,
    week_id: Sequelize.INTEGER,
    player_id: Sequelize.INTEGER,
    fantasy_team_id: Sequelize.INTEGER,
    opposing_nfl_team: Sequelize.INTEGER,
    active: Sequelize.STRING(1),
    passing_yd: Sequelize.INTEGER,
    rushing_yd: Sequelize.INTEGER,
    receiving_yd: Sequelize.INTEGER,
    passing_td: Sequelize.INTEGER,
    rushing_td: Sequelize.INTEGER,
    receiving_td: Sequelize.INTEGER,
    reception: Sequelize.INTEGER,
    interception: Sequelize.INTEGER,
    fumble: Sequelize.INTEGER,
    field_goal: Sequelize.INTEGER,
    sacks: Sequelize.INTEGER,
    tackles: Sequelize.INTEGER,
    two_point_conversion: Sequelize.INTEGER,
    players_game_fantasy_score: Sequelize.INTEGER
});

gameStats.season_id.belongsTo(season);
gameStats.player_id.belongsToMany(player);
gameStats.fantasy_team_id.belongsToMany(fantasyTeam);
gameStats.opposing_nfl_team.belongsToMany(nflTeam);

gameStats.sync();

module.exports = gameStats;
