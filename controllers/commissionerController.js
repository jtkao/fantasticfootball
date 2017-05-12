var commissionerModel = require("../commissionerModel.js")
var db = require("../models")

module.exports = function(app) {

    app.get("/comse", function(req, res) {
        res.render("comse", { title: 'commissioner setup', layout: "com_main" });
    })

    app.post("/comse", function(req, res) {
        console.log(req.body);
        res.end();
    });

    app.put("/comu", function(req, res) {
        console.log(req.body);

        // CALL RUBRIC FROM DB
        // CALCULATE SCORE
        // PASS SCORE INTO STATS OBJECT 

        // PASS OBJECT (STATS) INTO DB VIA COMM MODEL
    });

    app.post("/comcr", function(req, res) {
        console.log(req.body);

        commissionerModel.createPlayer(req.body);

        res.end();
    })


    app.get("/comu", function(req, res) {
        res.render("comu", {
            title: 'commissioner update',
            layout: "com_main",
            season: {},
            player: {}
        })
    });

    app.get("/comcr", function(req, res) {
        res.render("comcr", { title: 'commissioner create', layout: "com_main" });
    });

};
