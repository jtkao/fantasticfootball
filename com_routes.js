// THIS WILL BE BROKEN UP INTO CONTROLLERS
var roster = require("./public/assets/logic/data.js")
var express = require("express");
var router = express.Router();

router.get("/comse", function(req, res) {
    res.render("comse", { title: 'commissioner setup', layout: "com_main" });
})

router.post("/comse", function(req, res) {
    console.log(req.body);
    res.end();
});

router.put("/comu", function(req, res) {
    console.log(req.body);

    // CALL RUBRIC FROM DB
    // CALCULATE SCORE
    // PASS SCORE INTO STATS OBJECT 

    // PASS OBJECT (STATS) INTO DB VIA COMM MODEL

    res.end();
});

router.post("/comcr", function(req, res) {
    console.log(req.body);

    // THEN CREATE NEW 16 ROWS IN SEASON STATS FOR PLAYER
    res.end();
})

var years = [{ year: 2015 }, { year: 2014 }, { year: 2013 }];

router.get("/comu", function(req, res) {
    res.render("comu", {
        title: 'commissioner update',
        layout: "com_main",
        season: years,
        player: roster
    })
});

router.get("/comcr", function(req, res) {
    res.render("comcr", { title: 'commissioner create', layout: "com_main" });
});

module.exports = router;
