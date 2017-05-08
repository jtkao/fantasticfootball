//var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes){

var position = sequelize.define('t_position', {
	description: DataTypes.STRING
});
	return position;
};