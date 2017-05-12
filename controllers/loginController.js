var login = require('../loginModel.js');

// controller 
module.exports = function(app) {

    app.get("/", function(req,res){

        res.render('homepage', {layout: 'login'});
    });

    app.post('/login', function(req, res){
        console.log(req.body);

        login.validateCredentials(req.body);

        res.redirect('/oer');
    });

    app.post('/register', function(req, res){
        console.log(req.body);

        login.registerNewUser(req.body);

        res.redirect('/oer');
    });

};
