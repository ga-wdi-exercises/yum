var Schema = require("../db/schema.js");
var MenuItem = Schema.MenuItem;
var Restaurant = Schema.Restaurant;

MenuItem.remove({}, function(err){
  console.log(err)
})
Restaurant.remove({}, function(err){
  console.log(err)
})

var item1 = new MenuItem({title: "BigMac"})
var item2 = new MenuItem({title: "Whopper Jr"})
var item3 = new MenuItem({title: "Dave's Deluxe"})

resturant1 = new Restaurant({ name: "Mc Donald's", address: { street: "North", zipcode: 11101, }, yelp: "https://www.yelp.com/biz/McDonalds"})
resturant2 = new Restaurant({ name: "Burger King", address: { street: "East", zipcode: 11102 }, yelp: "https://www.yelp.com/biz/BurgerKing"})
resturant3 = new Restaurant({ name: "Wendy's", address: { street: "West", zipcode: 11103}, yelp: "http://www.yelp.com/biz/Wedys"})


var resturants = [resturant1, resturant2, resturant3]
var menuItems = [item1, item2, item3]


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
