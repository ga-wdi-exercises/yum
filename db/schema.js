var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("database has been connected!");
});

var Schema = mongoose.Schema

var MenuSchema = new Schema({
  title: String
})

var RestaurantSchema =  new Schema({
  name: String,
  address: {street: String, state: String, zipcode: Number},
  yelp: String,
  items: [MenuSchema]
})

var Menu = mongoose.model("Menu", MenuSchema)
var Restaurant = mongoose.model("Restaurant", RestaurantSchema)

module.exports = {
  Restaurant: Restaurant,
  Menu: Menu
}
