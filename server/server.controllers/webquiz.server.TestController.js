/**
 * Created by Liz on 2016-05-09.
 */
//CRUD functions

var mongoose = require('mongoose');
var TestModel = require('TestSchema');

exports.createTest = function (req, res) {
    var newTest = new TestModel(req.body);
    newTest.save();
};

exports.getTestByUser = function (req, res) {
    TestModel.find({assignedUsers: req})
};

exports.getTestByAdmin = function () {

};

exports.updateTest = function () {

};

exports.deleteTest = function () {

};