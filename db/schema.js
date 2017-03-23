// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/yum');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

const mongoose = require("./connection.js");

var Schema = mongoose.Schema;

var MenuSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {street: String, zipcode: Number},
  yelpUrl: String,
  items: [MenuSchema]
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
const Menu = mongoose.model("Menu", MenuSchema)

module.exports= {
  Restaurant,
  Menu
}
