var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('our database has been connected, thank mongod!');
});


var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var MenuItemSchema = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: { street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
})

var MenuItem = mongoose.model("MenuItem", MenuItemSchema)
var Restaurant = mongoose.model("Restaurant", RestaurantSchema)

module.exports = {
  MenuItem: MenuItem,
  Restaurant: Restaurant
}
