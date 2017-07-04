var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

MenuItem.remove({}, err => {
  if(err){
    console.log(err)
  }
});

var kazan = new Restaurant({ name: "Kazan", address: {street: "6813 Redmond Dr", zipcode: 22101}, yelp: https: "https://www.yelp.com/biz/kazan-restaurant-mclean" })
var bozellis = new Restaurant({ name: "Bozelli's", address: {street: "1025 Vermont Ave NW", zipcode: 20005}, yelp: https: "https://www.yelp.com/biz/bozzellis-washington" })
var vapiano = new Restaurant({ name: "Vapiano", address: {street: "1800 M St NW", zipcode: 20036}, yelp: https: "https://www.yelp.com/biz/vapiano-washington-2" })
