/**
 * Created by Liz on 5/4/2016.
 */

var Test = require('../models/test.model.js');


module.exports = (function () {
    var router = require('express').Router();
  // get tests
    router.get('/skapaProv', function (req,res) {
      Test.find(function (err, tests) {
          if(err){
              res.json({msg: 'error getting tests from db...'});
          }
          return tests;
      })
  });
    router.post(function (req,res) {
        var newTest = new Test(req.body); // request.body should contain json data
        newTest.save(function (err) {
            if(err){
            console.log('error saving data: ' + err);
            }
        })
        
    });

    return router;
})();


/*
exports.create = function (req, res) {
    var entry = new Test({
        title: req.body.title,
        description: req.body.description,
        isActive: req.body.isActive,
        type: req.body.type,
        course: req.body.course,
        limitMinutes: req.body.limitMinutes,
        questions: [ req.body.questions ],
        expireDate: req.body.expireDate
    });

    var callback = function (err) {
        if (err) {
            var msg = "error loading...";
        }
    };
    entry.save(callback);

    res.redirect('301', '/');

};*/
