var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var db = require('./models/index.js');

var com_routes = require("./com_routes.js")

const PORT = process.env.PORT || 4200;

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(com_routes);
require('./ownerController.js')(app);

app.get("/", function(req,res){
    res.send("hi")
})

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);

//model function testing area

        // db.sequelize.query(
        //           'select p.id, p.fname, p.lname '
        //         + 'from t_players p '
        //         + 'where p.id in ( '
        //             + 'select player_id '
        //             + 'from tx_fantasy_team_rosters '
        //             + 'where fantasy_team_id is null '
        //                 + 'and season_id = ' + 1 + ');'
        // ).spread(function(data){
        //     console.log(data);
        // });

//end function testing

    });
});
//post has many comments
//commenst belong to one post
