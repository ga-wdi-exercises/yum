//requires mongoose
var mongoose = require('mongoose');
//connects to mongodb
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

//defines the schemas
var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      street: String,
      zipcode: Number,
    },
    yelpurl: String,
    items: [MenuSchema],
  }
);

var MenuSchema = new mongoose.Schema(
  {
    title: String,
  }
)
//defines the models
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Menu = mongoose.model("Menu", MenuSchema);
