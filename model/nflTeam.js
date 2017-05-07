var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var nflTeam = sequelize.define('t_nfl_team', {
    description: Sequelize.STRING,
    city: Sequelize.STRING
});

nflTeam.belongsToMany(gameStats);

nflTeam.sync();

module.exports = nflTeam;
