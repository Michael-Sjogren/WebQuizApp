/**
 * Created by Michael Sjögren on 2016-05-07.
 */
var users = require('../models/webquiz.server.UsersModel');
var address = require('../models/webquiz.server.AdressModel');

exports.createUser = function (req , res) {
    var Users = new users({
        username : req.body.username,
        fName : req.body.firstname,
        lName : req.body.lastname,
        password : req.body.password,
        role : req.body.role,
        email : req.body.email,
        isActive : req.body.isActive,
        phone : req.body.phone
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