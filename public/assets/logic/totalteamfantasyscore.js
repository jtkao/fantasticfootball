var singleScore = require("./totalfantasyscore.js");
var testRoster = require("./data.js");
var stats = require("./dummyStats.js");

var testRubric = {
"passTd": 5,
  "rushTd": 6,
  "recTd": 6,
  "passYd": 20,
  "rushYd": 10,
  "recYd": 10,
  "numRec": 1,
  "fg": 3,
  "tpc": 2,
  "fumble": 2,
  "int": 2,
  "tackle": 1,
  "sack": 4 
};

function teamFantasyScore(activeRoster, scoringRubric, activeStatsObject) {
    // scoringRubric will be passed in through db

    // activeStatsList should be a list containing objects 
    // order should be identical to activeRoster

    // scoringRubric and activeStatsList will share properties (stats)

    var teamScore = 0;

    for (var i = 0; i < activeRoster.length; i++) {
        var position = activeRoster[i].position;
        var id = activeRoster[i].id
        var score = singleScore(scoringRubric, position, activeStatsObject[id]);
        console.log(activeRoster[i].name, id, score);
        teamScore += score;
    }

    teamScore = teamScore.toFixed(1)
    console.log(teamScore)
    return teamScore
}

teamFantasyScore(testRoster, testRubric, stats);
