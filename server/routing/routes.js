/**
 * Created by Michael Sjögren on 2016-05-09.
 */


var usersCtrl = require('../server.controllers/webquiz.server.controller');
module.exports = (function() {

    var router = require('express').Router();

  

    router.post('/' , function (req , res) {

       console.log("post is happening");
        res.send(req.body.username);
        return usersCtrl.createUser(req,res);

    });

    return router;
})();
