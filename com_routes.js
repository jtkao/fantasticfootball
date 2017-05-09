// THIS WILL BE BROKEN UP INTO CONTROLLERS
var roster = require("./public/assets/logic/data.js")
var express = require("express");
var router = express.Router();

router.get("/comse", function(req,res){
	res.render("comse", {title: 'commissioner setup', layout:"com_main"});
})

router.post("/comse", function(req, res){
	console.log(req.body);
	res.end();
});

router.post("/comu", function(req, res){
	console.log(req.body);
	res.end();
});

router.post("/comcr", function(req, res){
	console.log(req.body);
	res.end();
})

var years = [{year:2015},{year:2014},{year:2013}];
var weeks = [{val:1},{val:2},{val:3},{val:4},{val:5},{val:6},{val:7},{val:8}]

router.get("/comu", function(req,res){
	res.render("comu", {title: 'commissioner update', layout:"com_main"
		, season: years
		, week: weeks
		, player: roster
	})
});

router.get("/comcr", function(req,res){
	res.render("comcr", {title: 'commissioner create', layout:"com_main"});
});

module.exports = router;