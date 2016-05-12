var mongoose = require('mongoose');
var TestModel = require('../models/test.model.js');
var UserModel = require('../models/webquiz.server.UsersModel.js')
var questionModel = require('../models/webquiz.server.QuestionModel.js')


exports.createTest = function (req, res) {

    var newTest = new TestModel(req.body);

    var questions = [];

    console.log('attempting to save test to db');
    for(var question in req.body.questions){
        var options = [];
        for(var option in question.options){
            options.push(option);
        }

        question.options = options;

        questions.push(new questionModel(question));

    }
    newTest.questions = questions;


    /* var newTest = new TestModel({
     title: req.body.title,
     description: req.body.description,
     type: req.body.type,
     course: req.body.course,
     limitMinutes: req.body.limitMinutes,
     /!*        questions:  req.body.questions ,*!/
     expireDate: req.body.expireDate,
     testAdmin: req.body.testAdmin
     });*/



    newTest.save(function (err) {
        if(err){
            console.log('error saving.. error:' + err);
        }
        console.log(newTest);
        console.log('saved tests to db');
    });
};

// request array of users
exports.assignUsers = function (req,res) {

};

exports.getAllTests = function (req,res) {
    TestModel.find(function (err, tests) {
        if (err) {
            res.json({info: 'error finding tests in db', error:err});
            console.log('error getting all tests');
        }


        for(var test in tests){
            var questions = [];
            for(var question in test.questions){
                var options = [];
                for(var option in question.options){
                    options.push(option);
                }
                var questionObj = new questionModel({questionTitle: question.questionTitle, options: options, correctAns: question.correctAns });
                console.log('added a question');
                questions.push(questionObj);
            }
            test.questions = questions;
        }


        res.json(tests);
        console.log('tests found successfully');
    });
};

exports.findTestByAdmin = function (req, res) {
    TestModel
        .findOne({testAdmin : req.body.testAdmin})
};

exports.findTestByAssignedUser = function (req,res) {
};

