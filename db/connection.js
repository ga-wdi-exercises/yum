var mongoose  = require("mongoose");

var MenuSchema = new mongoose.Schema (
  {
  title: String
});

var RestaurantSchema = new mongoose.Schema({
  name: String,
  street: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuSchema]
})

mongoose.model("Restaurant", RestaurantSchema);
mongoose.model("Menu", MenuSchema);
mongoose.connect('mongodb://localhost/yum');

module.exports = mongoose;
