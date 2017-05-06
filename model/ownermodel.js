var roster = require("./data.js")

// owner model
// will require ORM

var owner = {

	// MAX ROSTER SIZE IS 19
	checkRosterSize: function(fantasyTeamID){
		// query the fantasy roster for single User, return size of roster

		// *** this will be used primarily as a conditional in the below addFromWaiver
		// *** to make sure the fantasy roster has space to support another player
		return rosterSize;
	},

	dropPlayer: function(playerID){
		// this will be a PUT
		// *** change player selected by playerID fantasy_team_id to NULL (or equivalent)
	},

	checkActiveLineup: function(fantasyTeamID){
		// return true if active lineup is full (if number of active players = 12)
		// *** needs names, ids, and position of ALL active players
		// return false if active lineup is not full

		// this will be used
	},

	checkTotalFantasyRoster: function(fantasyTeamID){
		// *** needs names, ids, position of ALL players on fantasy roster
		// *** this will be for loading the "check my roster"  page
	}

	getAll: function(){
		// get all static player data AND their season stats IF player is not on a fantasy team
		// this is a huge query 
		var availablePlayers = [];
		return availablePlayers;
	},

	addPlayerFromWaiver: function(fantasyTeamID, availablePlayerID, rosterPlayerID){
		// availablePlayerID = the id of the player on waivers that the user is selecting to add to their fantasy team
		// front end: user selects player
		// code then...
		// check if roster has available space (checkRosterSize)
		// if there is space, rosterPlayerID = "999999"
		// front end: allow user to add player 

		// if there no space
		// front end: buttons pop up that let you select player to exchange

		// waiver player is added to bench

		// *** this function will call the above checkRosterSize() to make sure # of players on fantasy team <=19
		// *** if # of players < 19, player selected by the passed availablePlayerID will change
		// *** fantasy_team_id to reflect the User 
		// *** if # of player = 19, User will have to select player to drop (thereby calling dropPlayer())
	},

	benchPlayer: function(playerID){
		// PUT request changes player active status to "bench"
	},

	checkPlayerPosition: function(playerID){
		// GET the player's position
		// *** this function is only going to be used in conjunction with activatePlayer() below
	},

	activatePlayer: function(playerID){
		// *** checkPlayerPosition will return the player's position
		// *** in the front end, IF this matches with the slot selected on the fantasy roster
		// *** this function (activatePlayer()) will trigger

		// PUT request changes player active status to "active"
	}

};

console.log(roster)