var mongoose = require("mongoose");

var RestaurantSchema = new mongoose.Schema(
  {
  name: String,
  address: {street: String, zipcode: Number},
  yelpUrl: String,
  items: [MenuItemSchema]
});

mongoose.model("Restaurant", RestaurantSchema);
mongoose.connect("mongodb://localhost/yum")

module.exports = mongoose;
