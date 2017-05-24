var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.remove({}, (err) => {
  console.log(err)
});

MenuItem.remove({}, (err) => {
  console.log(err)
});

resturant1 = new Restaurant({ name: "guapos", address: { street: "slobadon st", zipcode: 20001, }, yelp: "http://www.yelp.com/"})
resturant2 = new Restaurant({ name: "blue 44", address: { street: "bahls rd", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/"})
resturant3 = new Restaurant({ name: "hippy dippy", address: { street: "player st", zipcode: 20005}, yelp: "http://www.yelp.com/"})
