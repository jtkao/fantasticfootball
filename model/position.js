var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var position = sequelize.define('t_position', {
	description: Sequelize.STRING
});

position.sync();

module.exports = position;