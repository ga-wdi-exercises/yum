var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


 var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

  var RestaurantSchema = new Schema({
    name: String,
    address:
    yelp_url: String,
    items: []
  })

  var MenuSchema = new Schema({
    title: String,
  })
