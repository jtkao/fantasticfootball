var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var teamOwner = sequelize.define('t_team_owner', {
    description: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

teamOwner.sync();

module.exports = teamOwner;
