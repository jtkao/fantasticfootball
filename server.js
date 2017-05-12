var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var db = require('./models');

const PORT = process.env.PORT || 4200;

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

require('./controllers/commissionerController')(app);
require('./controllers/ownerController.js')(app);
require('./controllers/loginController.js')(app);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);

//model function testing area




//end function testing

    });
});
