var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.remove({}, function(err) {
  console.log(err)
})
MenuItem.remove({}, function(err) {
  console.log(err)
})


  restaurant1 = new Restaurant({ name: "William Jeffrey's Tavern", address: { street: "2301 Columbia Pike", zipcode: 22204, }, yelp: "https://www.yelp.com/biz/william-jeffreys-tavern-arlington"})
  restaurant2 = new Restaurant({ name: "Buffalo Wild Wings", address: { street: "950 N. Glebe Rd. Ste. 130", zipcode: 22203 }, yelp: "https://www.yelp.com/biz/buffalo-wild-wings-washington-5"})
  restaurant3 = new Restaurant({ name: "The Italian Store", address: { street: "3123 Lee Highway", zipcode: 22201}, yelp: "https://www.yelp.com/biz/the-italian-store-arlington"})
  restaurant4 = new Restaurant({ name: "Taco Bell", address: { street: "4923 Lee Hwy", zipcode: 22207 }, yelp: "https://www.yelp.com/biz/taco-bell-arlington-2"})


  var item1 = new MenuItem({title: "Buttermilk Ranch Chicken Sandwich"})
  var item2 = new MenuItem({title: "Blazin' Wings"})
  var item3 = new MenuItem({title: "Large Capri on a hard roll"})
  var item4 = new MenuItem({title: "Chalupa"})
  var item5 = new MenuItem({title: "Pizza"})
  var item6 = new MenuItem({title: "Soft Taco"})
