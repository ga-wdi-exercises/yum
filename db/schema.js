var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId

var MenuItemSchema = mongoose.Schema({
  title: String
});

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: { street: String, state: String, zipcode: Number },
  yelp: String,
  items: [MenuItemSchema]
});

var MenuItemModel = mongoose.model("MenuItemSchema", MenuItemSchema);
var RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

// var blueDuck = new Restaurant({name: "Blue Duck Tavern", address: {street: "2400 M St, NW", state: "Washington, DC", zipcode: 20037}, yelpURL:"http://www.yelp.com"})
// var item8 = new MenuItem({item: "Chicken Tinga Tacos"})

// blueDuck.restaurant.push(newRestaurant)
//
// blueDuck.save((err, author) => {
//   console.log("what's up")
//   if(err){
//     console.error(err)
//   } else {
//     console.log(author)
//     process.exit()
//   }
// })


module.exports = {
  Restaurant: RestaurantModel,
  MenuItem: MenuItemModel
};
