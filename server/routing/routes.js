/**
 * Created by Michael Sjögren on 2016-05-09.
 */

var usersCtrl = require('../server.controllers/webquiz.server.controller');
module.exports = (function() {
    var index = 0;
    var router = require('express').Router();

  router.get('/adminMenu', function (req , res) {
        res.send("fasgasga");
  });

    router.post('/userRegistration' , function (req , res) {
        
        return usersCtrl.createUser(req,res);
        console.log("post success" , index , req);
    });

    return router;
})();
