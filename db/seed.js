var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;


Restaurant.remove({}, function(err){
  console.log(err)
})
MenuItem.remove({}, function(err){
  console.log(err)
})


var soup = new MenuItem({title: "Potato soup"})
var fries = new MenuItem({title: "Sweet potato fries"})
var burger = new MenuItem({title: "Cheese burger"})
var icecream = new MenuItem({title: "chocolate icecream"})
var coffee = new MenuItem({title: "coffee"})
var spinach = new MenuItem({title: "fresh spinach"})
var salad = new MenuItem({title: "Greek salad"})
var chips = new MenuItem({title: "potato chips"})

resturant1 = new Restaurant({ name: "Corner Bakery", address: { street: "123 Rose St NW", zipcode: 20005, }, yelp: "http://www.yelp.com"})
  resturant2 = new Restaurant({ name: "Stinky Fries", address: { street: "Up Your Butt And Around the Corner", zipcode: 20044 }, yelp: "http://www.yelp.com"})
  resturant3 = new Restaurant({ name: "Potbelly", address: { street: "Smelly Feet Ally", zipcode: 25545}, yelp: "http://www.yelp.com"})
  resturant4 = new Restaurant({ name: "Pies", address: { street: "Sad Lane Road", zipcode: 23333 }, yelp: "http://www.yelp.com"})
  resturant5 = new Restaurant({ name: "Dani's", address: { street: "LaLaLand", zipcode: 22435}, yelp: "http://www.yelp.com"})

var menuItems = [soup, fries, burger, icecream, coffee, spinach, salad, chips]
var resturants = [resturant1, resturant2, resturant3, resturant4, resturant5]

resturants.forEach(function(resturant, i){
  resturant.items.push(menuItems[i], menuItems[i+3]);
  resturant.save(function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
});
