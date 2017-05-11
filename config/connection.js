var Sequelize = require("sequelize");

var sequelize = new Sequelize("fantasy_football", "becf12872a09ab", "ac5b754b", {
  host: "us-cdbr-iron-east-03.cleardb.net",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;