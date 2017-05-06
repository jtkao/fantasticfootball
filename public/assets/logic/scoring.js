// will require data from db for value(s)

// WILL NEED TO CREATE TABLE TO STORE CONFIGURATIONS
// TABLENAME <<STATS>> <<MAX # OF ACTIVE PLAYERS BY POSITION>> !!!!!!!!!!!!! 

var scoring = {
	// for touchdowns, receptions
	per: function(tds, value){
		return (value * tds);
	},

	// for yardage
	forEvery: function(yards, value){
		return (yards / value);
	},

	// for fumbles, interceptions
	minusPer: function(ints, value){
		return ((ints * value) * (-1));
	}
};

module.exports = scoring;

