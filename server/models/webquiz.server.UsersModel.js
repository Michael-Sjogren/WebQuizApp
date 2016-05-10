/**
 * Created by Michael Sjögren on 2016-05-06.
 */

var mongoose = require('mongoose');
var addressSchema = require('./webquiz.server.AdressModel.js');
var Schema = mongoose.Schema;

var usersSchema = new Schema({

   username :{type:String , required : true},
   fName : {type:String , required : true},
   lName : {type:String , required : true},
   password : {type:String , required : true},
   ssn: {type:String , required : true},
   role : {type:String , required : true},
   email : {type: String , required : true},
   isActive : {type: String , required : true},
   phone : {type: String , required : true},
  // assignedTests : tests,
   address : [addressSchema]
});

module.exports = mongoose.model('Users',usersSchema);