/**
 * Created by Michael Sjögren on 2016-05-09.
 */

var usersCtrl = require('../server.controllers/webquiz.server.controller');
module.exports = (function() {
    var index = 0;
    var router = require('express').Router();

  router.get('/adminMenu', function (req , res) {
    
  });

    router.post('/userRegistration' , function (req , res) {
        
        return usersCtrl.createUser(req,res);
        console.log("post success" , index , req);
    });

    router.post('/login' , function (req , res) {

        return usersCtrl.authenticateLogin(req,res);
    });
    
    

    return router;
})();
