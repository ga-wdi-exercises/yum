var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.remove({}, function(err){
  console.log(err)
})
MenuItem.remove({}, function(err){
  console.log(err)
})

  resturant1 = new Restaurant({ name: "Insomnia Cookies", address: { street: "4435 Lehigh Rd", zipcode: 20740, }, yelp: "http://www.yelp.com/biz/cookiehttps://www.yelp.com/biz/insomnia-cookies-college-park?osq=Insomnia+Cookies"})
  resturant2 = new Restaurant({ name: "Cookies by Design", address: { street: "7698-B Belair Rd", zipcode: 21236 }, yelp: "https://www.yelp.com/biz/cookies-by-design-baltimore?osq=Cookies+by+Design"})
  resturant3 = new Restaurant({ name: "Uncle Chip’s Cookie & Dessert Suppliers", address: { street: "1514 N Capitol St NW", zipcode: 20001}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
  resturant4 = new Restaurant({ name: "Captain Cookie and the Milk Man", address: { street: "Dupont Circle", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
  resturant5 = new Restaurant({ name: "J’s Cookies", address: { street: "1700 N Moore St", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"})

  var item1 = new MenuItem({title: "chocolate chip cookie"})
  var item2 = new MenuItem({title: "sugar cookie"})
  var item3 = new MenuItem({title: "peanut butter cookie"})
  var item4 = new MenuItem({title: "snickerdoodle"})
  var item5 = new MenuItem({title: "red velvet cookie"})
  var item6 = new MenuItem({title: "raisin cookie"})
  var item7 = new MenuItem({title: "coconut cookie"})

  var menuItems = [item1, item2, item3, item4, item5, item6, item7]
  var resturants = [resturant1, resturant2, resturant3, resturant4, resturant5]

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
