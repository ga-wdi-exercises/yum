var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name: String,
  address: Array[{
    street: String,
    zipcode: Number,
  items: Array[{
    title: String
  }]
  }]
})

var Restaurant = mongoose.model("Restaurant", RestaurantSchema)

// mongoose.connect("mongodb://localhost/whenpresident")

module.exports = mongoose.model ()
