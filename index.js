var mongoose = require('mongoose');
var bodyParser = require("body-parser")


mongoose.connect('mongodb://localhost/yum')
var Schema = require("./db/schema.js");

var db = mongoose.connection;
db.on('error', function(err){
  console.log(err);
});

  db.once('open', function() {
    console.log("database has been connected");
});
