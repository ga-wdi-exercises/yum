var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema

var menuSchema = new Schema ({
  title: String
});

var restaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  }
  yelpUrl: String,
  items: [ {type: Schema.ObjectId, ref: "Project"}]
});

module.exports= {
  Menu: Menu,
  Restaurant: Restaurant
};

// var Menu = mongoose.model("Menu", MenuSchema);
// var Restaurant = mongoose.model("Restaurant", RestaurantSchema);

var pizza = new Restaurant ({name: "&pizza", address:{street:"6000 frontier dr, springfiled, va", zipcode:22152}, yelpUrl: "www.yelp.com", items: [menuSchema]})
var pizzaMenu = new Menu ({items: "traditional pizza, pepperoni pizza, vegan pizza."})
