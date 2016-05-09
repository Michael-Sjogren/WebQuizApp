/**
 * Created by Michael Sjögren on 2016-05-04.
 */
var mongoose = require('mongoose');



mongoose.connect('mongodb://admin1:A9c3aZ72@ds013222.mlab.com:13222/heroku_8z539qtl');
var user = "admin1";
var password = "A9ca@Z72";
var dbHost = mongoose.connection;


dbHost.on('error', console.error.bind(console, 'connection error:'));

dbHost.once('open', function(){
    
    console.log("Connected to DB");

});


