var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;



Restaurant.remove({}, function(err){
  console.log(err)
})
MenuItem.remove({}, function(err){
  console.log(err)
})



  resturant1 = new Restaurant({ name: "I-Thai Restaurant & Sushi Bar", address: { street: "3003 M St NW", zipcode: 20007, }, yelp: "https://www.yelp.com/biz/i-thai-restaurant-and-sushi-bar-washington-2"})
  resturant2 = new Restaurant({ name: "Tryst", address: { street: "2459 18th St NW", zipcode: 20009 }, yelp: "https://www.yelp.com/biz/tryst-washington"})
  resturant3 = new Restaurant({ name: "La Puerta Verde", address: { street: "2001 Fenwick St NE", zipcode: 20002}, yelp: "https://www.yelp.com/biz/la-puerta-verde-washington"})
  resturant4 = new Restaurant({ name: "Bar Pilar", address: { street: "1833 14th St NW", zipcode: 20009 }, yelp: "https://www.yelp.com/biz/bar-pilar-washington"})
  resturant5 = new Restaurant({ name: "Patisserie Poupon", address: { street: "1645 Wisconsin Ave NW", zipcode: 20007}, yelp: "https://www.yelp.com/biz/patisserie-poupon-washington"})

  var item1 = new MenuItem({ title: "Pineapple Fried Rice"})
  var item2 = new MenuItem({ title: "Green Curry"})
  var item3 = new MenuItem({ title: "Fruit tart"})
  var item4 = new MenuItem({ title: "Ceviche de Huachinango"})
  var item5 = new MenuItem({ title: "Deviled duck eggs"})
  var item6 = new MenuItem({ title: "Smoked Salmon Salad"})

  var menuItems = [item1, item2, item3, item4, item5, item6]
  var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5]

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
