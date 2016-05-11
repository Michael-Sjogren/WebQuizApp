/**
 * Created by Michael Sjögren on 2016-05-07.
 */
var users = require('../models/webquiz.server.UsersModel');
var userAddress = {};

exports.createUser = function (req , res) {
    var address = [];

     userAddress = {city : req.body.city ,street : req.body.address , zip : req.body.postalCode };

    address.push(userAddress);
    var Users = new users({
        username : req.body.userName,
        fName : req.body.firstName,
        lName : req.body.lastName,
        password :req.body.password ,
        ssn: req.body.ssn ,
        role : req.body.userAttachment,
        email :req.body.email ,
        isActive :req.body.userStatus,
        phone : req.body.phone,
        address : address
    });

    Users.save(function (err){
        if(err) return console.error(err);
        else {
            console.log("save successful");
        }
    });
};

exports.authenticateLogin = function (req , res) {
     var pw = req.body.loginPassword;
     var userName = req.body.loginUsername;
    var query = users.findOne({password : pw , username : userName},function (err , user) {
        console.log(user);
    })
};