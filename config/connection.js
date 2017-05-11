var Sequelize = require("sequelize");

var sequelize = new Sequelize("heroku_37d45f748722cd4", "becf12872a09ab", "ac5b754b", {
  host: "us-cdbr-iron-east-03.cleardb.net",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;