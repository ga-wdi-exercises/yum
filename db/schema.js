let mongoose = require('mongoose')
// connecting mongoose
mongoose.connect('mongodb://localhost/yum')
// assigning mongoose connection to letiable
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connected to MongoDB!")
})

// defining menu items schema
let MenuItemSchema = new mongoose.Schema({
  title: String
})
// defining restaurant menu schema
let RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
})

// creating models from schema
let MenuItem = mongoose.model('Restaurant', RestaurantSchema)
let Restaurant = mongoose.model('MenuItem', MenuItemSchema)


// function findRestaurant() {
//   console.log(Restaurant.find({}));
// }

// findRestaurant();
module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
}
