var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var com_routes = require("./com_routes.js")
var o_routes = require("./o_routes.js")

const PORT = process.env.PORT || 4200;

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(com_routes);
app.use(o_routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
