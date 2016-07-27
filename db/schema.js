var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


//restaurant and menu schema
var Schema = mongoose.Schema
var MenuSchema = new Schema ({
  title: String,
  places: [{ref: "Menu"}]
})
var PlaceSchema = new Schema ({
  name: String,
  address: [{
    street: String,
    zipcode: Number
  }],
  yelpUrl: String,
  menus: [MenuSchema]
})

var MenuModel = mongoose.model("Menu", MenuSchema)
var FoodModel = mongoose.model("Place", PlaceSchema)

module.exports = {
  Menu = MenuModel,
  Place = PlaceModel
}
