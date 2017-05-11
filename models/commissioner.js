//var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var commissioner = sequelize.define("t_commissioner", {
        description: DataTypes.STRING,
        league_name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        passing_yd: DataTypes.INTEGER,
		rushing_yd: DataTypes.INTEGER,
		receiving_yd: DataTypes.INTEGER,
		passing_td: DataTypes.INTEGER,
		rushing_td: DataTypes.INTEGER,	
		receiving_td: DataTypes.INTEGER,
		reception: DataTypes.INTEGER,
		interception: DataTypes.INTEGER,
		fumble: DataTypes.INTEGER,
		field_goal: DataTypes.INTEGER,
		sacks: DataTypes.INTEGER,
		tackles: DataTypes.INTEGER,
		two_point_conversion: DataTypes.INTEGER
    });

    return commissioner;
};
