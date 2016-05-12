/**
 * Created by Liz on 5/12/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// SCHEMA: questions
var questionSchema = new Schema({
    questionTitle: {type: String, default: 'Icke namngivet'},
    options: [{type: String, required:false}],
    correctAns: {type:Number}
});

module.exports = mongoose.model('QuestionSchema', questionSchema);