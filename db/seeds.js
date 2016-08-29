

var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

Restaurant.remove({}, function(err){
  console.log(err)
});

Menu.remove({}, function(err){
  console.log(err);
});

restaurant1 = new Restaurant({ name: "Cookies Corner", address: { street: "1970 2nd St NW", zipcode: 20001, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"})
restaurant2 = new Restaurant({ name: "The Blind Dog Cafe", address: { street: "944 Florida Ave", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
restaurant3 = new Restaurant({ name: "Birch & Barley", address: { street: "1337 14th St NW", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
restaurant4 = new Restaurant({ name: "Captain Cookie and the Milk Man", address: { street: "Dupont Circle", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
restaurant5 = new Restaurant({ name: "J’s Cookies", address: { street: "1700 N Moore St", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"})


var item1 = new Menu({title: "chocolate chip cookie"})
var item2 = new Menu({title: "sugar cookie"})
var item3 = new Menu({title: "peanut butter cookie"})
var item4 = new Menu({title: "cheese pizza"})
var item5 = new Menu({title: "salad"})
var item6 = new Menu({title: "sub"})
var item7 = new Menu({title: "pasta"})

var menu = [item1, item2, item3, item4, item5, item6, item7 ]
var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5 ]

restaurants.forEach(function(restaurant, i){
  restaurant.items.push(menu[i], menu[i+3]);
  restaurant.save(function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
});
