var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var commissioner = sequelize.define('t_commissioner', {
	description: Sequelize.STRING,
	league_name: Sequelize.STRING,
	username: Sequelize.STRING,
	password: Sequelize.STRING
});

commissioner.sync();

module.exports = commissioner;