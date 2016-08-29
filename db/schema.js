var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var Restaurant = new Schema({
  name: String,
  address: {
    street: String,
    zipCode: Number
  },
  yelpUrl: String,
  items: [{type: Schema.ObjectIdm ref: "MenuItems"}]
})

var Menu = new Schema ({
  title: String
})

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Menu = mongoose.model("Menu", MenuSchema);

var restaurant1 = new Restaurant({"name": "Bertucci's", "address": {"2000 Pennsylvania Ave", "zipCode":  20006}, "yelpUrl": "https://www.yelp.com/biz/bertuccis-washington-3?osq=Bertucci%27s"});
var menu1 = new Menu({"title": "Shrimp Alfredo"});

//Find a restaurant by name
function findName(restaurants){
db.restaurants.findOne({"name": "Bertucci's"});
}

//Find all restaurants by zipCode
function findZip(restaurants, zipCode){
db.restaurants.find({"address.zipCode": 20006});
}
// Create a function that updates a restaurant.

db.restaurants.updateOne({"name": "Bertucci's"},
{
$set: {"name": "Bertuccis"}
}
);

//Write a function or method that deletes a restaurant.

db.restaurants.remove({"name": "Bertuccis"})

// Write methods to add and remove embedded menu item documents for a restaurant of your choosing.
for(var i = 0; i < restaurants.length; i++){
  restaurants[i].menus.push(menus[i], menus[i+1])
  restaurants[i].save(function(err, restaurant){
    if (err){
      console.log(err);
    } else {
      console.log(restaurant);
    }
  })
};
