/**
 * Created by Michael Sjögren on 2016-05-06.
 */

var mongoose = require('mongoose');
var addressSchema = require('./webquiz.server.AdressModel.js');
var Schema = mongoose.Schema;

var usersSchema = new Schema({

   username : String,
   fName : {type:String , required : true},
   lName : {type:String , required : true},
   password : {type:String , required : true},
   role : {type:String , required : true},
   email : {type: String , required : true},
   isActive : Boolean,
   phone : {type: String , required : true},
  // assignedTests : tests,
   address : [addressSchema]
});

module.exports = mongoose.model('UsersModel',usersSchema);