var mongoose          = require("../db/schema.js");

var RestaurantModel = require("../models/restaurant.js")
var MenuItemModel   = require("../models/menuItem.js")

//Lets remove all traces of the current models in our database currently
//before we add some more shit to it.
RestaurantModel.remove({}, function(err){});
MenuItemModel.remove({}, function(err){});

//*******************SEED ITEM DEFINITIONS********************

  var restaurant1 = new RestaurantModel({ name: "Cookies Corner", address: { Street: "1970 2nd St NW", Zipcode: 20001, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"})
  var restaurant2 = new RestaurantModel({ name: "The Blind Dog Cafe", address: { Street: "944 Florida Ave", Zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
  var restaurant3 = new RestaurantModel({ name: "Birch & Barley", address: { Street: "1337 14th St NW", Zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
  var restaurant4 = new RestaurantModel({ name: "Captain Cookie and the Milk Man", address: { Street: "Dupont Circle", Zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
  var restaurant5 = new RestaurantModel({ name: "J’s Cookies", address: { Street: "1700 N Moore St", Zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"})


  var item1 = new MenuItemModel({title: "chocolate chip cookie"})
  var item2 = new MenuItemModel({title: "sugar cookie"})
  var item3 = new MenuItemModel({title: "peanut butter cookie"})
  var item4 = new MenuItemModel({title: "cheese pizza"})
  var item5 = new MenuItemModel({title: "pasta"})

  var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5]
  var menuItems = [item1, item2, item3, item4, item5]

//********************NOW WE CAN MAKE A LOOP*******************

for(var i = 0; i<restaurants.length; i++){
  restaurants[i].items.push(menuItems[i])
  restaurants[i].save(function(err, docs){
    if (err){
      console.log(err);
    }else{
      console.log(docs);;
    }
  })
}
