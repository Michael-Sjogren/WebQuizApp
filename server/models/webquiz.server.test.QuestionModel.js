/**
 * Created by Liz on 5/4/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// SCHEMA: questions
var questionSchema = new Schema({
    title: {type: String, required: true, default: 'Icke namngivet', validate: requireStringValidator},
    description: {type: String, required: false, validate: requireStringValidator},
    type: {type: String, required: true, validate: requireStringValidator},
    options: [{option: String, required:false, validate: requireStringValidator}]
});

module.exports = mongoose.model('Questions', questionSchema);