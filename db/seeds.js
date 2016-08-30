var mongoose = require("mongoose")
var conn = mongoose.connect("mongodb://localhost/restaurants")
var Restaurant = require("../models/restaurant")
var Menu = require("../models/menu")

Restaurant.remove({}, function(err){
})
Menu.remove({}, function(err){
})

var restaurant1 = new Restaurant({ name: "Unsweetened Green Tea", address: { street: "1970 2nd St NW", zipcode: 20001, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"})
var restaurant2 = new Restaurant({ name: "Trouver le Poulet", address: { street: "944 Florida Ave", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
var restaurant3 = new Restaurant({ name: "Birch & Barley", address: { street: "1337 14th St NW", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
var restaurant4 = new Restaurant({ name: "Ur Mom's", address: { street: "Dupont Circle", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
var restaurant5 = new Restaurant({ name: "Chicken Chicken Chicken Chicken", address: { street: "1700 N Moore St", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"})

var menu1 = new Menu({title: "pizza"})
var menu2 = new Menu({title: "banana"})
var menu3 = new Menu({title: "bob"})
var menu4 = new Menu({title: "croque madame"})
var menu5 = new Menu({title: "oyster shooter"})
var menu6 = new Menu({title: "big ol sandwach"})
var menu7 = new Menu({title: "horse milk"})

var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5]
var menus = [menu1, menu2, menu3, menu4, menu5, menu6, menu7]

for (var i=0; i < restaurants.length; i++){
  restaurants[i].menus.push(menus[i], menus[i+3])
  restaurants[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("restaurants saved...by ur mom")
    }
  })
}
