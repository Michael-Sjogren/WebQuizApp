/**
 * Created by Michael Sjögren on 2016-05-09.
 */

var usersCtrl = require('../server.controllers/webquiz.server.controller');
module.exports = (function() {
    var router = require('express').Router();



    router.post('/userRegistration' , function (req , res) {
        
        return usersCtrl.createUser(req,res);
    });

    router.post('/login' , function (req , res) {

        return usersCtrl.authenticateLogin(req,res);
    });

    router.get('/adminMenu', function (req , res) {
       return usersCtrl.getUsers(req  ,res);
    });

 
    
    

    return router;
})();
