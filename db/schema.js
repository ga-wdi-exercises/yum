var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log('databse has been connected!');
});

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelp: String,
  items: [MenuSchema]
});

var MenuSchema = new Schema({
  title: String
});

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var MenuItem = mongoose.model("MenuItem", MenuItem);

// var restaurant1 = new Restaurant({
//   name: "Modern Market Eatery",
//   address: {
//     street: "1010 Vermont Ave NW",
//     zipcode: 20005
//   },
//   yelp: "https://www.yelp.com/biz/modern-market-eatery-washington",
// });
//
// var item1 = new Menu({
//     title: "Steak Salad"
// });

module.exports = {
  Restaurant,
  MenuItem
};
