var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', err => {
  console.log(err);
});

db.once('open', () => {
  console.log("database has been connected!");
});

// Create Schemas
var Schema = mongoose.Schema;
  ObjectId = Schema.ObjectId

var MenuItemsSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [ {type: Schema.ObjectId, ref: "Menu"}]
})

var Menu = mongoose.model("Menu", MenuItemsSchema )
var Restaurant = mongoose.model("Restaurant", RestaurantSchema )

var astro = new Restaurant({name: "Astro Doughnuts", address: {street: "Leesburg Pike", zipcode: 22043 }, yelpUrl: "https://www.yelp.com/biz/astro-doughnuts-and-fried-chicken-falls-church"})

astro.save((err, restaurant) => {
  if(err) {
    console.log(err);
  } else {
    console.log(restaurant);
  }
})
