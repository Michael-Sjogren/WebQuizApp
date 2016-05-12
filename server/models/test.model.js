/**
 * Created by Liz on 5/4/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Users = require('./webquiz.server.UsersModel.js');
var questionSchema = require('./webquiz.server.QuestionModel');




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
/*var questionSchema = new Schema({
 questionTitle: {type: String, default: 'Icke namngivet'},
 options: [{type: String, required:false}],
 correctAns: {type:Number}
 });*/

//SCHEMA: test
var testSchema = new Schema({
    title: {type: String},
    description: {type: String, required: false},
    type:{type:String, required:false},
    course: {type: String, required: false, validation: requireStringValidator},
    limitMinutes: {type: Number, required: true, default: 10},
    questions: [ questionSchema ],
    expireDate: {type: Date, required: false},
    testAdmin: {type:Schema.ObjectId, ref: Users},
    assignedUsers: [ Users ]
});

module.exports = mongoose.model('TestSchema', testSchema);