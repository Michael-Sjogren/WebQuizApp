/**
 * Created by Michael Sjögren on 2016-05-09.
 */

var usersCtrl = require('../server.controllers/webquiz.server.controller');
var testCtrl = require('../server.controllers/test.controller');
module.exports = (function() {
    var router = require('express').Router();



    router.post('/userRegistration' , function (req , res) {
        
        return usersCtrl.createUser(req,res);
    });

    router.post('/login' , function (req , res) {

        return usersCtrl.authenticateLogin(req,res);
    });

    router.get('/adminMenu', function (req , res) {
       return usersCtrl.getStudents(req  ,res);
    });


    router.get('/api/test', function (req, res) {
        return testCtrl.getAllTests(req, res);
    });

    router.post('/api/test', function (req,res) {
        return testCtrl.createTest(req, res);
    });



    return router;
})();
