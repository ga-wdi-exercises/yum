var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var ResterauntModel = Schema.ResterauntModel
var MenuModel = Schema.MenuModel

var fiveGuys = new ResterauntModel({
  name: "Five Guys",
  address: {street: "808 H St NW", zipcode: 20001},
  yelpUrl: "https://www.yelp.com/biz/five-guys-washington-13"
  i
});

var FiveGuysMenu1 = new MenuModel({
  title: "Hamburger"
});
var FiveGuysMenu2 = new MenuModel({
  title: "Cheeseburger"
});
var FiveGuysMenu3 = new MenuModel({
  title: "Double Cheeseburger"
});
var FiveGuysMenu4 = new MenuModel({
  title: "Fries"
});
var FiveGuysMenu5 = new MenuModel({
  title: "Drink"
});

var resteraunts = [fiveGuys];
var menuItems = [FiveGuysMenu1, FiveGuysMenu2, FiveGuysMenu3, FiveGuysMenu4, FiveGuysMenu5];

resteraunts.forEach(function(resteraunt, i) {
  resteraunt.menuItems.push(menuItems[i])
  resteraunt.save(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("A resteraunt was saved!");
    }
  })
});
