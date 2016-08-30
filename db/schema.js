var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

var MenuSchema = new Schema(
  {
    title: String
  }
)

var RestaurantSchema = new Schema(
  {
    name: String,
    address: {
        street: String,
        zipcode: Number
        },
    yelpUrl: String,
    items: [MenuSchema]
  }
);


mongoose.connect('mongodb://localhost/yum');

mongoose.model("RestaurantModel", RestaurantSchema);
mongoose.model("MenuModel", MenuSchema);

module.exports = mongoose;
