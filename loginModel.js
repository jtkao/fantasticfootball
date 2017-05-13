var db = require("./models")

var loginModel = {

    cb: function(msg) {
        return msg;
    },

    registerNewUser: function(credentials, cb){

        //first validate if the username entered exists
        db.sequelize.query(
            'select *' + ' from t_team_owners' + ' where username = "' + credentials.username + '";'
        ).spread(function(usernameData) {

            //if data returns a user name, send back message sayig that username already exists
            if (usernameData.length > 0){
                cb('Username already exists');

            } else {

                db.sequelize.query(
                    'insert t_team_owners (description, username, password, createdat, updatedat)'
                    + 'values ("' + credentials.FantasyTeamName + '", "' + credentials.username + '", "' + credentials.password + '", now(), now());'
                ).spread(function(credentialsData) {
                    cb('Account created successfully!');
                });
            }
        });         
    },
    
    validateCredentials: function(credentials, cb) {

        var err;

        //first validate if the username entered exists
        db.sequelize.query(
            'select *' + ' from t_team_owners' + ' where username = "' + credentials.username + '";'
        ).then(function(usernameData) {
            
            //if data doesn't return a user name, send back message that user does not exist
            if (usernameData[0].length === 0) {
                cb('Username does not exist');
                // throw err;

            //move on to validating the password
            } else {

                db.sequelize.query(
                    'select *' + ' from t_team_owners' + ' where username = "' + credentials.username + '"' + ' and password = "' + credentials.password + '";'
                ).spread(function(credentialsData) {
                    
                    //if data does return a username and password, send message that username/password combo is invalid
                    if (credentialsData.length === 0){
                        cb('Username and password do not match');
                        // throw err;  

                    //maybe it actually matches
                    } else if (credentialsData[0].username === credentials.username && credentialsData[0].password === credentials.password){
                        cb('Login Successful!')
                        // throw err;

                    //must have left somehting out?
                    } else {
                        cb('Unknown error')
                        // throw err;
                    }
                });
            }
        });

    }    
}

module.exports = loginModel;
