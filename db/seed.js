var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.remove({},err =>{
  if(err){
    console.log(err)
  }
})

MenuItem.remove({}, err =>{
  if(err){
    console.log(err)
  }
})

restaurant1 = new Restaurant({ name: "Olive Garden", address: { street: "1234 Main St NW", zipcode: 20000, }, yelp: "https://www.yelp.com/c/oxon-hill-md-us/restaurants"})
restaurant2 = new Restaurant({ name: "Lilly Milly's", address: { street: "1234 Main St NW", zipcode: 20000, }, yelp: "https://www.yelp.com/c/oxon-hill-md-us/restaurants"})
restaurant3 = new Restaurant({ name: "Pizza Hut", address: { street: "1234 Main St NW", zipcode: 20000, }, yelp: "https://www.yelp.com/c/oxon-hill-md-us/restaurants"})
restaurant4 = new Restaurant({ name: "Ben & Jerry's", address: { street: "1234 Main St NW", zipcode: 20000, }, yelp: "https://www.yelp.com/c/oxon-hill-md-us/restaurants"})
restaurant5 = new Restaurant({ name: "Bonefish", address: { street: "1234 Main St NW", zipcode: 20000, }, yelp: "https://www.yelp.com/c/oxon-hill-md-us/restaurants"})

var item1 = new MenuItem({title: "pasta"})
var item2 = new MenuItem({title: "cupcakes"})
var item3 = new MenuItem({title: "pepporoni"})
var item4 = new MenuItem({title: "cheese pizza"})
var item5 = new MenuItem({title: "ice cream"})
var item6 = new MenuItem({title: "sub"})


var menuItems = [item1, item2, item3, item4, item5, item6]
var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5]

restaurants.forEach(function(restaurant, i){
    restaurant.menuItems.push(menuItems[i], menuItems[i+3]);
    restaurant.save(function(err, docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  });
