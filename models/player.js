var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var gameStats = require("./gameStats.js");
var fantasyTeamRoster = require("./fantasyTeamRoster.js");
var fantasyTeamStats = require("./fantasyTeamStats.js");

var player = sequelize.define('t_player', {
    fname: Sequelize.STRING,
    lname: Sequelize.STRING,
    position: Sequelize.STRING,
    nfl_team: Sequelize.STRING,
    jersey_number: Sequelize.INTEGER
});

player.belongsToMany(gameStats);
player.belongsToMany(fantasyTeamRoster);

player.sync();

module.exports = player;
