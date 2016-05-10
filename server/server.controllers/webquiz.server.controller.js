/**
 * Created by Michael Sjögren on 2016-05-07.
 */
var users = require('../models/webquiz.server.UsersModel');
var address = require('../models/webquiz.server.AdressModel');

exports.createUser = function (req , res) {
    var Users = new users({
        username : req.body.userName,
        fName : req.body.firstName,
        lName : req.body.lastName,
        password :req.body.password ,
        ssn: req.body.ssn ,
        role : req.body.userAttachment,
        email :req.body.email ,
        isActive :req.body.userStatus,
        phone : req.body.phone
        // assignedTests : tests,
    });

    Users.save();
};

exports.createAddress = function (req ,res) {
    var Address = new address({
        street:req.body.address,
        zip : req.body.postalCode,
        city : req.body.city
    });

    Address.save();
};