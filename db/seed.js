var Schema = require("../db/schema.js");
var mongoose = require('mongoose');
var Schema = require("./schema.js");

var Item = Schema.Item;
var Restaurant = Schema.Restaurant;

Item.remove({}).then(function(err){
  console.log(err)
});

Restaurant.remove({}).then(function(err){
  console.log(err)
});

resturant1 = new Restaurant({ name: "Olive Garden", address: { street: "444 Harleydavidson NW", state: "VA", zipcode: 22301, }, yelp: "hhttps://www.yelp.com/biz/olive-garden-italian-restaurant-falls-church-2"})
resturant2 = new Restaurant({ name: "Silver Diner", address: { street: "334 Chrisangle Ave", state: "VA", zipcode: 20001 }, yelp: "https://www.yelp.com/biz/silver-diner-arlington?osq=Silver+Diner"})
resturant3 = new Restaurant({ name: "TGI Friday", address: { street: "223 Brunomars NW", state: "DC", zipcode: 20005}, yelp: "https://www.yelp.com/biz/tgi-fridays-washington-12?osq=TGI+Fridays"})
resturant4 = new Restaurant({ name: "Famous Dave's", address: { street: "889 Discomove", state: "VA", zipcode: 20036 }, yelp: "https://www.yelp.com/biz/famous-daves-alexandria?osq=Famous+Dave%27s"})
resturant5 = new Restaurant({ name: "Applebee's", address: { street: "320 Whatthefucntion Ave", state: "VA", zipcode: 22209}, yelp: "https://www.yelp.com/biz/applebees-forestville?osq=Applebee%27s"})


var item1 = new Item({title: "Chicken Alfredo"})
var item2 = new Item({title: "Philly Steak Sandwich"})
var item3 = new Item({title: "Bbq Pork Ribs"})
var item4 = new Item({title: "Salmon Teriyaki"})
var item5 = new Item({title: "Shrimp Bisque"})
var item6 = new Item({title: "Newyork Steak"})
var item7 = new Item({title: "Ceaser Salad"})

var Items = [item1, item2, item3, item4, item5, item6, item7]
var Resturants = [resturant1, resturant2, resturant3, resturant4, resturant5]
