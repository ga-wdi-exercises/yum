var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;

Restaurant.remove({}, function(err){
  console.log(err)
})

restaurant1 = new Restaurant({ name: "Cookies Corner", address: { street: "1970 2nd St NW", zipcode: 20001, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"})
restaurant2 = new Restaurant({ name: "The Blind Dog Cafe", address: { street: "944 Florida Ave", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
restaurant3 = new Restaurant({ name: "Birch & Barley", address: { street: "1337 14th St NW", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
restaurant4 = new Restaurant({ name: "Captain Cookie and the Milk Man", address: { street: "Dupont Circle", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
restaurant5 = new Restaurant({ name: "J’s Cookies", address: { street: "1700 N Moore St", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"})

restaurants.forEach(function(restaurant){
   restaurant.save(function(err, docs){
     if(err){
       console.log(err);
     }
     else{
       console.log(docs);
     }
   });
 });
