var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log("database up and running!")
})

const Schema = mongoose.Schema

let menuItemSchema = new Schema({
  title: String
})

let restaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [menuItemSchema]
})

let Restaurant = mongoose.model("Restaurant", restaurantSchema)

let ihop = new Restaurant({name: "IHOP"})

function restName() {
  Restaurant.findOne({name: restaurant_name}, (err, restaurant) => {
    err ? console.log(err) : console.log(restaurant)
  })
}
