/**
 * Created by Michael Sjögren on 2016-05-09.
 */

var usersCtrl = require('../server.controllers/webquiz.server.controller');
module.exports = (function() {

    var router = require('express').Router();

  router.get('/adminMenu', function (req , res) {
        res.send("fasgasga");
  });

    router.post('/userRegistration' , function (req , res) {

       console.log("post is happening");
        return usersCtrl.createUser(req,res) , usersCtrl.createAddress(req,res);


    });

    return router;
})();
