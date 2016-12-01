var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.remove({}, function(err) {
  console.log(err);
});
MenuItem.remove({}, function(err) {
  console.log(err);
});

restaurant1 = new Restaurant({ name: "Random ass DC art-z fart-z salad place", address: { street: "1970 2nd St NW", zipcode: 20001, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"});
restaurant2 = new Restaurant({ name: "Terrible bullshit sushi buredo plc", address: { street: "944 Florida Ave", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"});
restaurant3 = new Restaurant({ name: "Another Chipotle copycat", address: { street: "1337 14th St NW", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"});
restaurant4 = new Restaurant({ name: "Amazing pizza Chipotle copycat aka &pizza", address: { street: "Dupont Circle", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"});
restaurant5 = new Restaurant({ name: "Seaweed wrapped bullshit", address: { street: "1700 N Moore St", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"});

var item1 = new MenuItem({title: "Seaweed bullshit burger"});
var item2 = new MenuItem({title: "Shitty wrap"});
var item3 = new MenuItem({title: "Caca salad"});
var item4 = new MenuItem({title: "Soup from Zoup"});
var item5 = new MenuItem({title: "Craptastic sushi buredo"});
var item6 = new MenuItem({title: "Hipster copycat burrito"});
var item7 = new MenuItem({title: "Fries"});

var menuItems = [item1, item2, item3, item4, item5, item6, item7];
var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5];

restaurants.forEach(function(restaurant, i) {
  restaurant.items.oush(menuItems[i], menuItems[i+3]);
  restaurant.save(function(err, docs) {
    if(err) {
      console.log(err);
    }
    else {
      console.log(docs);
    }
  });
});
