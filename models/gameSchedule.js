//var Sequelize = require("sequelize");
// var gameStats = require("./gameStats.js");
// var fantasyTeamRoster = require("./fantasyTeamRoster.js");
// var fantasyTeamStats = require("./fantasyTeamStats.js");
// var seasonFantasyTeamStats = require("./seasonFantasyTeamStats.js");

module.exports = function(sequelize, DataTypes) {

    var gameSchedule = sequelize.define('t_game_schedules', {
        week_id: DataTypes.INTEGER,
        game_type: DataTypes.STRING,
        home_team: DataTypes.INTEGER,
        away_team: DataTypes.INTEGER
    });

    return gameSchedule;
};
