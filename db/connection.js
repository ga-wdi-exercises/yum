var mongoose = require("mongoose");

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {street: String, zipcode: Number},
    yelpUrl: String,
    items: [ItemSchema]
  }
);

mongoose.model("Restaurant", RestaurantSchema);
mongoose.connect("mongodb://localhost/yum");

var seedData = require("./seeds.json");
module.exports = mongoose;
