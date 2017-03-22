var mongoose = require("mongoose");

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      street: String,
      zipcode: Number
    },
    yelp: String,
    items: [MenuSchema]
  }
);

var MenuSchema = new Schema(
{
  title: String
}
);

mongoose.model("Restaurant", RestaurantSchema);
mongoose.model("Menu", MenuSchema);
mongoose.connect("mongod://localhost/resturants");


module.exports = mongoose;
