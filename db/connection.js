var mongoose = require("mongoose");

var MenuSchema = new mongoose.Schema(
  {
    title: String
  }
);

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      street: String,
      zipcode: Number
    },
    yelp: String,
    items: MenuSchema
  }
);

mongoose.model("Restaurant", RestaurantSchema);
mongoose.model("Menu", MenuSchema);
mongoose.connect(process.env.MONGOLAB_URL || "mongodb://localhost/yum");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
module.exports = mongoose;
