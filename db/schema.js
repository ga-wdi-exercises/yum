var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("Database Connected.");
});

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var RestaurantSchema = newSchema({
  title: String
});
