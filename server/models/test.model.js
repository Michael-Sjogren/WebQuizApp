/**
 * Created by Liz on 5/4/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Questions = require('./webquiz.server.test.QuestionModel.js');
var Users = require('./webquiz.server.UsersModel.js');



var testTitleValidator = [function (val) {
    return val.length > 0 && val.toLocaleLowerCase() != 'none'
}, // error msg
    'Ange titel pä testet.'];

// validates string
var requireStringValidator = [
    function (val) {
        var testVal = val.trim();
        return (testVal.length > 0)
    }, //error msg
    '{{PATH}} cannot be empty'];

//validates numbers
var requireNumberValidator = [
    function (val) {
        return val.isNumber() && val.length >0
    }, // error msg
    'Invalid number'
];

//SCHEMA: test
var testSchema = new Schema({
    title: {type: String, required: true, validate: testTitleValidator},
    description: {type: String, required: false, validate: requireStringValidator},
    isActive: {type: Boolean, required: true, default: false},
    course: {type: String, required: false, validate: requireStringValidator},
    limitMinutes: {type: Number, required: true, default: 10, validate: requireNumberValidator},
    questions: [ Questions ],
    expireDate: {type: Date, required: false},
    testAdmin: Users,
    assignedUsers: [ Users ]
});

module.exports = mongoose.model('Test', testSchema);