var masterScore = {

    scoring: {
        per: function(tds, value) {
            return (value * tds);
        },

        forEvery: function(yards, value) {
            return (yards / value);
        },

        minusPer: function(ints, value) {
            return ((ints * value) * (-1));
        }
    },

    playerScore: function(rubric, position, rawStats) {
        var total = 0;

        if (position === "QB" || position === "RB" || position === "WR" || position === "TE" || position === "K") {

            var passTd = this.scoring.per(rawStats.passTd, rubric.passTd);
            var rushTd = this.scoring.per(rawStats.rushTd, rubric.rushTd);
            var recTd = this.scoring.per(rawStats.recTd, rubric.recTd);

            var passYd = this.scoring.forEvery(rawStats.passYd, rubric.passYd);
            var rushYd = this.scoring.forEvery(rawStats.rushYd, rubric.rushYd);
            var recYd = this.scoring.forEvery(rawStats.recYd, rubric.recYd);

            var numRec = this.scoring.per(rawStats.numRec, rubric.numRec);

            var fg = this.scoring.per(rawStats.fg, rubric.fg);

            var tpc = this.scoring.per(rawStats.tpc, rubric.tpc);

            var fumble = this.scoring.minusPer(rawStats.fumble, rubric.fumble);

            var int = this.scoring.minusPer(rawStats.int, rubric.int);

            //console.log(passTd,rushTd,recTd,passYd,rushYd,recYd,numRec,fg,tpc,fumble,int)
            total += passTd + rushTd + recTd + passYd + rushYd + recYd + numRec + fg + tpc + fumble + int;

        } else {

            // all set to rushTd value in scoring rubric
            var passTd = this.scoring.per(rawStats.passTd, rubric.rushTd);
            var rushTd = this.scoring.per(rawStats.rushTd, rubric.rushTd);
            var recTd = this.scoring.per(rawStats.recTd, rubric.rushTd);

            var fumble = this.scoring.per(rawStats.fumble, rubric.fumble);
            var int = this.scoring.per(rawStats.int, rubric.int);

            var tackle = this.scoring.per(rawStats.tackle, rubric.tackle);
            var sack = this.scoring.per(rawStats.sack, rubric.sack);

            //console.log(passTd,rushTd,recTd,fumble,int,tackle,sack)
            total += passTd + rushTd + recTd + fumble + int + tackle + sack;
        }

        return total;
    },

    addScore: function(bigObject, rubric, rawStats) {

        for (object in bigObject) {
            var position = bigObject[object].position;
            var id = bigObject[object].id;
            var score = this.playerScore(rubric, position, rawStats[id]);
            bigObject[object].score = score;
        }
    },

    addScoreBench: function(bigList, rubric, rawStats) {

        for (var i = 0; i < bigList.length; i++) {
            var position = bigList[i].position;
            var id = bigList[i].id
            var score = this.playerScore(rubric, position, rawStats[id]);
            bigList[i].score = score;
        }
    },

    teamFantasyScore: function(activeRoster, rubric, rawStats) {
        
        var teamScore = 0;

        for (player in activeRoster) {
            var position = activeRoster[player].position;
            var id = activeRoster[player].id;
            var score = this.playerScore(rubric, position, rawStats[id]);
            teamScore += score
        }

        teamScore = teamScore.toFixed(1)
        return teamScore
    }
}

module.exports = masterScore
