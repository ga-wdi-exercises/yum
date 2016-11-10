var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
db.on('error', function(err){
  console.log(err);
});

db.once('open', function() {
  console.log("Connected to MongoDB!");

});

mongoose.Promise = global.Promise

var Schema = mongoose.Schema

var MenuItemSchema = new Schema ({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: {street: String, zipcode: Number },
  yelpUrl: String,
  items:[MenuItemSchema]
})


var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var MenuItem = mongoose.model("MenuItem", MenuItemSchema)

// var bluejacket = new Restaurant({name: "Bluejacket", address:{street:"300 Tingey St SE", zipcode: 20003}, yelpUrl:"https://www.yelp.com/biz/bluejacket-washington",})
//
// var pickle = new MenuItem({title: "Pickle Pot"})
// var tots=  new Menu({title: "House Tots"})



module.exports = {Restaurant, MenuItem}
