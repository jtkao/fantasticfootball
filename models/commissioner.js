//var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var commissioner = sequelize.define("t_commissioner", {
        description: DataTypes.STRING,
        league_name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });

    return commissioner;
};
