var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var MenuModel       = Schema.MenuModel;

var roses = new RestaurantModel({
  name:     "Rose's Luxury",
  address:  "717 8th St SE, Washington, DC 20003",
  yelp_url: "http://www.yelp.com/biz/roses-luxury-washington"
});
var keren = new RestaurantModel({
  name:     "Keren Restaurant",
  address:  "1780 Florida Ave NW, Washington, DC 20009",
  yelp_url: "http://www.yelp.com/biz/keren-restaurant-washington",
});
var ampersand = new RestaurantModel({
  name:     "&pizza",
  address:  "1400 K St NW, Washington, DC 20006",
  yelp_url: "http://www.yelp.com/biz/and-pizza-washington-15",
});

var salad     = new MenuModel({title: "salad"});
var soup      = new MenuModel({title: "soup"});
var steak     = new MenuModel({title: "steak"});
var chicken   = new MenuModel({title: "chicken"});
var rice      = new MenuModel({title: "rice"});
var potatoes  = new MenuModel({title: "potatoes"});
var pizza     = new MenuModel({title: "pizza"});

var restaurants = [roses, keren, ampersand];
var items       = [salad, soup, steak, chicken, rice, potatoes, pizza];

restaurants.forEach(function(restaurant, index){
  for (var _ = 0; _ < 3; _++) {
    restaurant.items.push(items[Math.floor(Math.random() *
                                restaurants.length)]);
  }
  restaurant.save(function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Restaurant saved:", restaurant);
    }
  });
});
