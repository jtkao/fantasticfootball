var db = require("./models")

var loginModel = {

    validateCredentials: function(credentials) {

        //first validate if the username entered exists
        db.sequelize.query(
            'select *' + ' from t_team_owners' + ' where username = "' + credentials.username + '";'
        ).spread(function(usernameData) {
            //if data doesn't return a user name, send back message that user does not exist
            //else...
            db.sequelize.query(
                'select *' + ' from t_team_owners' + ' where username = "' + credentials.username + '"' + ' and password = "' + credentials.password + '";'
            ).spread(function(credentialsData) {
                //if data does return a username and password, send message that username/password combo is invalid
                //else return true and and owner id and continue user story
            });
        });

    },

    registerNewUser: function(credentials){

        //first validate if the username entered exists
        db.sequelize.query(
            'select *' + ' from t_team_owners' + ' where username = "' + credentials.username + '";'
        ).spread(function(usernameData) {
            //if data returns a user name, send back message sayig that username already exists
            //else...
            db.sequelize.query(
                'insert t_team_owners (description, username, password, createdat, updatedat)'
                + 'values ("' + credentials.FantasyTeamName + '", "' + credentials.username + '", "' + credentials.password + '", now(), now());'
            ).spread(function(credentialsData) {
                //what to do upon success
            });
        });        
    }
}

module.exports = loginModel;
