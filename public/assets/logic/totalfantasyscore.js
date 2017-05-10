var scoring = {
    per: function(tds, value) {
        return (value * tds);
    },

    forEvery: function(yards, value) {
        return (yards / value);
    },

    minusPer: function(ints, value) {
        return ((ints * value) * (-1));
    }
};

function playerScore(rubric, position, rawStats) {
	var total = 0;

    if (position === "QB" || position === "RB" || position === "WR" || position === "TE" || position === "K") {

        var passTd = scoring.per(rawStats.passTd, rubric.passTd);
        var rushTd = scoring.per(rawStats.rushTd, rubric.rushTd);
        var recTd = scoring.per(rawStats.recTd, rubric.recTd);

        var passYd = scoring.forEvery(rawStats.passYd, rubric.passYd);
        var rushYd = scoring.forEvery(rawStats.rushYd, rubric.rushYd);
        var recYd = scoring.forEvery(rawStats.recYd, rubric.recYd);

        var numRec = scoring.per(rawStats.numRec, rubric.numRec);

        var fg = scoring.per(rawStats.fg, rubric.fg);

        var tpc = scoring.per(rawStats.tpc, rubric.tpc);

        var fumble = scoring.minusPer(rawStats.fumble, rubric.fumble);

        var int = scoring.minusPer(rawStats.int, rubric.int);
        
        //console.log(passTd,rushTd,recTd,passYd,rushYd,recYd,numRec,fg,tpc,fumble,int)
        total += passTd + rushTd + recTd + passYd + rushYd + recYd + numRec + fg + tpc + fumble + int;

    } else {

    	// all set to rushTd value in scoring rubric
    	var passTd = scoring.per(rawStats.passTd, rubric.rushTd);
        var rushTd = scoring.per(rawStats.rushTd, rubric.rushTd);
        var recTd = scoring.per(rawStats.recTd, rubric.rushTd);

        var fumble = scoring.per(rawStats.fumble, rubric.fumble);
        var int = scoring.per(rawStats.int, rubric.int);

        var tackle = scoring.per(rawStats.tackle, rubric.tackle);
        var sack = scoring.per(rawStats.sack, rubric.sack);

        //console.log(passTd,rushTd,recTd,fumble,int,tackle,sack)
        total += passTd + rushTd + recTd + fumble + int + tackle + sack;
    }

    return total;
}

module.exports = playerScore

