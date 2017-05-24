var mongoose = require("mongoose");

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {street: String, zipcode: Number},
    yelpUrl: String,
    item: [ItemSchema]
  }
);

var ItemSchema = new mongoose.Schema(
  {
    title: String,
  }
);

mongoose.model("Restaurant", RestaurantSchema);
mongoose.model("Item", ItemSchema);
mongoose.connect("mongodb://localhost/yum");





module.exports = mongoose;
