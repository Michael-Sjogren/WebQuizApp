/**
 * Created by Michael Sjögren on 2016-05-06.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    street:String,
    zip : String,
    city : String
});

modules.exports = mongoose.model('addressSchema', addressSchema);