//var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {

    var Position = sequelize.define('t_position', {
        description: DataTypes.STRING
    });
    return Position;
};
