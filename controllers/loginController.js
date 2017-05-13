var login = require('../loginModel.js');

// controller 
module.exports = function(app) {

    app.get("/", function(req,res){

        res.render('homepage', {layout: 'login'});
    });

    app.post('/login', function(req, res){

        login.validateCredentials(req.body, function(msg){
            
            res.send(msg);

        });
    });

    app.post('/register', function(req, res){

        login.registerNewUser(req.body, function(msg){

            res.send(msg);
        });
    });

};
