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


var item1 = new MenuItem({title: "cheesecake"})
var item2 = new MenuItem({title: "oatmeal"})
var item3 = new MenuItem({title: "haggas"})

var menuItems = [item1, item2, item3]
var restaurants = [resturant1, resturant2, resturant3]


restaurants.forEach ((restaurant, i) => {
  restaurant.items.push(menuItems[i],menuItems[i + 1])
  restaurant.save((err, data) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log(data);
    }
  });
});
