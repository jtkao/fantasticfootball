var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var gameStats = require("./gameStats.js");
var fantasyTeamRoster = require("./fantasyTeamRoster.js");
var fantasyTeamStats = require("./fantasyTeamStats.js");
var seasonFantasyTeamStats = require("./seasonFantasyTeamStats.js");

var season = sequelize.define('t_season', {
    description: Sequelize.STRING,
    active: Sequelize.STRING (1)
});

season.belongsToMany(gameStats);
season.belongsToMany(fantasyTeamRoster);

season.sync();

module.exports = season;
