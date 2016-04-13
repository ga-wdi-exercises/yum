var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var MenuModel = Schema.MenuModel;

var jacobspickles = new RestaurantModel({
  name: "Jacob's Pickles",
  address: {
    street:  "509 Amsterdam Ave",
    zipcode: 10024
  },
  yelpurl: "http://www.yelp.com/biz/jacobs-pickles-new-york"
});

var momofuku = new RestaurantModel({
  name: "Momofuku Milk Bar",
  address: {
    street:  " 1090 I St NW",
    zipcode: 20001
  },
  yelpurl: "http://www.yelp.com/biz/momofuku-ccdc-washington"
});

var classic = new MenuModel({
  title: "Buttermilk Chicken and Pickles Sandwich"
});
var bbq = new MenuModel({
  title: "Buttermilk Chicken and Pepperjack Sandwich"
});
var southern = new MenuModel({
  title: "Buttermilk Chicken, Bacon, and Slaw Sandwich"
});
var egg = new MenuModel({
  title: "Buttermilk Chicken, Bacon, Eggs, and Grits Sandwich"
});


var crack = new MenuModel({
  title: "Crack Pie"
});
var milk = new MenuModel({
  title: "Cereal Milk"
});
var truffles = new MenuModel({
  title: "Cake Truffles"
});
var granola = new MenuModel({
  title: "quinoi granola with berries and yogurt"
});


jacobspickles.menu.push(classic, bbq, southern, egg);
momofuku.menu.push(crack, milk, truffles, granola);


var restaurants = [jacobspickles, momofuku];

restaurants.forEach(function(restaurant) {
   restaurant.save(function(err, docs) {
     if (err) {
       console.log(err);
     } else {
       console.log(docs);
     }
   });
 });
