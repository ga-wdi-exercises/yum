var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.remove({}, function(err){
  console.log(err)
})
MenuItem.remove({}, function(err){
  console.log(err)
})

resturant1 = new Restaurant({ name: "Panera Bread", address: { street: "1400 Irving St NW", zipcode: 20009, }, yelp: "https://www.yelp.com/biz/panera-bread-washington-3?osq=Panera+Bread"})
resturant2 = new Restaurant({ name: "Teds Bulletin", address: { street: "1800 14th St NW", zipcode: 20009 }, yelp: "https://www.yelp.com/biz/teds-bulletin-washington-3"})
resturant3 = new Restaurant({ name: "Birch & Barley", address: { street: "1337 14th St NW", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})

var item1 = new MenuItem({title: "Chocolate croissant"})
var item2 = new MenuItem({title: "Strawberry tarts"})
var item3 = new MenuItem({title: "Peanut butter cookie"})

var menuItems = [item1, item2, item3]
var resturants = [resturant1, resturant2, resturant3]


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
