var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var gameSchedulegameSchedule = sequelize.define('t_game_schedule', {
    week_id: Sequelize.INTEGER,
    game_type: Sequelize.STRING (7)
    home_team: Sequelize.STRING,
    away_team: Sequelize.STRING,
    home_team_score: Sequelize.INTEGER,
    away_team_score: Sequelize.INTEGER
});

gameSchedulegameSchedule.sync();

module.exports = gameSchedule;
