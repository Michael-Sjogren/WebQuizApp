/**
 * Created by Michael Sjögren on 2016-05-04.
 */
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routing/routes');
var path = require('path');
var app = express();

mongoose.connect('mongodb://admin1:A9c3aZ72@ds013222.mlab.com:13222/heroku_8z539qtl');

var dbHost = mongoose.connection;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/../')));
app.use(express.static(path.join(__dirname + '/../public')));

app.use('/', router);


dbHost.on('error', console.error.bind(console, 'connection error:'));



dbHost.once('open', function(){
    console.log("Connected to DB");
    console.log(path.join(__dirname + '/../'));
});
console.log("server running");

app.listen(3000);
