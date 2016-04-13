var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;


Restaurant.remove({}, function(err){
  console.log(err);
});
MenuItem.remove({}, function(err){
  console.log(err);
});


  resturant1 = new Restaurant({ name: "Cookies Corner", address: { street: "1970 2nd St NW", zipcode: 20001, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"});
  resturant2 = new Restaurant({ name: "The Blind Dog Cafe", address: { street: "944 Florida Ave", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"});
  resturant3 = new Restaurant({ name: "Birch & Barley", address: { street: "1337 14th St NW", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"});
  resturant4 = new Restaurant({ name: "Captain Cookie and the Milk Man", address: { street: "Dupont Circle", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"});
  resturant5 = new Restaurant({ name: "J’s Cookies", address: { street: "1700 N Moore St", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"});


  var item1 = new MenuItem({title: "chocolate chip cookie"});
  var item2 = new MenuItem({title: "sugar cookie"});
  var item3 = new MenuItem({title: "peanut butter cookie"});
  var item4 = new MenuItem({title: "cheese pizza"});
  var item5 = new MenuItem({title: "salad"});
  var item6 = new MenuItem({title: "sub"});
  var item7 = new MenuItem({title: "pasta"});

  var menuItems = [item1, item2, item3, item4, item5, item6, item7];
  var resturants = [resturant1, resturant2, resturant3, resturant4, resturant5];

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
