/**
 * Created by Liz on 5/7/2016.
 * 
 * just for testing..
 */

var port = 3000;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tests');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

//require test routing, use express object as argument
var test = require('./routing/test.route.js')(app);

var server = app.listen(port, function () {
    console.log('Server running at localhost port: ' + port + '...');
});

