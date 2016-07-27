var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var MenuSchema = mongoose.Schema({
  title: String
})

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
)

mongoose.model("Restaurant", RestaurantSchema);
mongoose.model("Menu", MenuSchema);

module.exports = mongoose
