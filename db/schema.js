var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema

var RestaurantSchema = new Schema ({
  name: String,
  address: {'street': String, 'zipcode': Number},
  yelpUrl: String,
  items: [MenuItemsSchema]
});

var MenuItemsSchema = new Schema ({
  title: String
})


var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var MenuItem = mongoose.model("MenuItem", MenuItemsSchema);
