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

var alero = new Restaurant({ name: "Alero Restaurant", address: { street: "1300 U St NW", zipcode: 20001, }, yelp: "https://www.yelp.com/biz/alero-restaurant-washington-2"})

var ozio = new Restaurant({ name: "Ozio Rooftop", address: { street: "944 Conneticut Ave", zipcode: 20001 }, yelp: "https://www.yelp.com/biz/ozio-washington"})

var mandu = new Restaurant({ name: "Mandu Korean", address: { street: "453 K St", zipcode: 20001}, yelp: "https://www.yelp.com/biz/mandu-washington-2"})

var alba = new Restaurant({ name: "Alba Osteria", address: { street: "300 4th St NW", zipcode: 20001 }, yelp: "https://www.yelp.com/biz/alba-osteria-washington"})

var wise = new Restaurant({ name: "Wise Guys", address: { street: "1120 4th St NW", zipcode: 22209}, yelp: "https://www.yelp.com/biz/wiseguy-pizza-washington-3?osq=wise+guys"})

var item1 = new MenuItem({title: "lasagna"})
var item2 = new MenuItem({title: "tacos"})
var item3 = new MenuItem({title: "pizza"})
var item4 = new MenuItem({title: "omelette"})
var item5 = new MenuItem({title: "salad"})
var item6 = new MenuItem({title: "udon"})
var item7 = new MenuItem({title: "pancakes"})

var menuItems = [item1, item2, item3, item4, item5, item6, item7]
var restaurants = [alero, ozio, mandu, alba, wise]

restaurants.forEach(function(restaurant, i){
    restaurant.items.push(menuItems[i], menuItems[i+3]);
    restaurant.save(function(err, docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  });
