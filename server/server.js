/**
 * Created by Michael Sjögren on 2016-05-04.
 */
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://admin1:A9c3aZ72@ds013222.mlab.com:13222/heroku_8z539qtl');

var dbHost = mongoose.connection;
app.use(express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




dbHost.on('error', console.error.bind(console, 'connection error:'));



dbHost.once('open', function(){
    console.log("Connected to DB");



});
console.log("server running");
app.listen(3000);
