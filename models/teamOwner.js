//var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes){

	var TeamOwner = sequelize.define('t_team_owner', {
    description: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
});
	return TeamOwner;
};