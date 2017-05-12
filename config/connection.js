var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,   
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "becf12872a09ab",
  password: "ac5b754b",
  database: "heroku_37d45f748722cd4",
  connectionLimit: 5
});

// connect
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
