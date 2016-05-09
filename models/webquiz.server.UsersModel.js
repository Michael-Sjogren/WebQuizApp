/**
 * Created by Michael Sjögren on 2016-05-06.
 */

var mongoose = require('mongoose');
var addressSchema = require('./webquiz.server.AdressModel.js');
var Schema = mongoose.schema;

var usersSchema = new Schema({

   username : String,
   fName : String,
   lName : String,
   password : String,
   role : String,
   email : String,
   isActive : Boolean,
   phone : String,
  // assignedTests : tests,
   address : [addressSchema]
});

moudle.exports = mongoose.model('usersSchema',usersSchema);