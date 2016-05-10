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
    /*function (val) {
        var testVal = val.trim();
        return (testVal.length > 0)
    }, //error msg
    '{{PATH}} cannot be empty'*/];

//validates numbers
var requireNumberValidator = [
    function (val) {
        return val.isNumber() && val.length >0
    }, // error msg
    'Invalid number'
];

// SCHEMA: questions
var questionSchema = new Schema({
    title: {type: String, required: true, default: 'Icke namngivet', validation: requireStringValidator},
    description: {type: String, required: false, validation: requireStringValidator},
    type: {type: String, required: true, validation: requireStringValidator},
    options: [{option: String, required:false, validation: requireStringValidator}]
});

//SCHEMA: test
var testSchema = new Schema({
    title: {type: String, required: true, validation: testTitleValidator},
    description: {type: String, required: false, validation: requireStringValidator},
    isActive: {type: Boolean, required: true, default: false},
    course: {type: String, required: false, validation: requireStringValidator},
    limitMinutes: {type: Number, required: true, default: 10, validation: requireNumberValidator},
    questions: [ questionSchema ],
    expireDate: {type: Date, required: false},
    testAdmin: {type:Schema.ObjectId, ref: Users},
    assignedUsers: [ Users ]
});

module.exports = mongoose.model('Test', testSchema);