/**
 * Created by Michael Sjögren on 2016-05-06.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    street:{type:String},
    zip : {type:String},
    city : {type:String}
});

module.exports = mongoose.model('addressSchema', addressSchema);