/**
 * Created by Michael Sjögren on 2016-05-07.
 */
var users = require('../models/webquiz.server.UsersModel');
var address = require('../models/webquiz.server.AdressModel');

exports.createUser = function (req , res) {
    var Users = new users({
        username : String,
        fName : String,
        lName : String,
        password : String,
        role : String,
        email : String,
        isActive : Boolean,
        phone : String
    });

    Users.save();
};

exports.createAddress = function (req ,res) {
    var Address = new address({
        street:String,
        zip : String,
        city : String
    });

    Address.save();
};