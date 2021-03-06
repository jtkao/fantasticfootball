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

        var position = parseInt(position);

        console.log("POSITION ID ", position)

        if (position === 1 || position === 2 || position === 3 || position === 4 || position === 9) {

            var passing_td = this.scoring.per(rawStats.passing_td, rubric.passing_td);
            var rushing_td = this.scoring.per(rawStats.rushing_td, rubric.rushing_td);
            var receiving_td = this.scoring.per(rawStats.receiving_td, rubric.receiving_td);
            var passing_yd = this.scoring.forEvery(rawStats.passing_yd, rubric.passing_yd);
            var rushing_yd = this.scoring.forEvery(rawStats.rushing_yd, rubric.rushing_yd);
            var receiving_yd = this.scoring.forEvery(rawStats.receiving_yd, rubric.receiving_yd);
            var reception = this.scoring.per(rawStats.reception, rubric.reception);
            var field_goal = this.scoring.per(rawStats.field_goal, rubric.field_goal);
            var two_point_conversion = this.scoring.per(rawStats.two_point_conversion, rubric.two_point_conversion);
            var fumble = this.scoring.minusPer(rawStats.fumble, rubric.fumble);
            var interception = this.scoring.minusPer(rawStats.interception, rubric.interception);
            
            console.log(passing_td,rushing_td,receiving_td,passing_td,rushing_td,receiving_yd,reception,field_goal,two_point_conversion,fumble,interception)
            
            total += passing_td + rushing_td + receiving_td + passing_yd + rushing_yd + receiving_yd + reception + field_goal + two_point_conversion + fumble + interception;

        } else {

            var passing_td = this.scoring.per(rawStats.passing_td, rubric.rushing_td);
            var rushing_td = this.scoring.per(rawStats.rushing_td, rubric.rushing_td);
            var receiving_td = this.scoring.per(rawStats.receiving_td, rubric.rushing_td);

            var fumble = this.scoring.per(rawStats.fumble, rubric.fumble);
            var interception = this.scoring.per(rawStats.interception, rubric.interception);

            var tackles = this.scoring.per(rawStats.tackles, rubric.tackles);
            var sacks = this.scoring.per(rawStats.sacks, rubric.sacks);

            console.log(passing_td,rushing_td,receiving_td,fumble,interception,tackles,sacks)
            
            total += passing_td + rushing_td + receiving_td + fumble + interception + tackles + sacks;
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

module.exports = masterScore;
