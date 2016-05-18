var mongoose = require("mongoose");

var restaurantSchema = new mongoose.Schema(
  {
    restaurant: "Burger King",
    address: "1227 Mills Pointe Dr.",
    yelp_url: "http://www.yelp.com/biz/burger-king-washington-9",
    items: []

  }
);

mongoose.model("Restaurant", restaurantSchema);
mongoose.connect("mongodb://localhost"/restaurant);
