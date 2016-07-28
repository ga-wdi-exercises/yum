var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name: String,
  address:{
    street: String,
    zipcode: Number
  },
  yelp_url: String,
  items:[menuSchema]
});

var Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.export = {
  Restaurant: Restaurant
};
