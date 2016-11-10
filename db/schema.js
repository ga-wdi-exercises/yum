//requires mongoose
var mongoose = require('mongoose');
//connects to mongodb
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

//defines the schemas
var MenuSchema = new mongoose.Schema(
  {
    title: String,
  }
)
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

mongoose.Promise = global.Promise

//defines the models
module.exports = {
  Restaurant: mongoose.model("Restaurant", RestaurantSchema),
  Menu: mongoose.model("Menu", MenuSchema)
}
