var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

Menu.remove({}, err => {
  if(err){
    console.log(err)
  }
});

var dish_one = new Menu({title: "Cheese Pizza"})
var dish_two = new Menu({title: "Greek Salad"})
var dish_three = new Menu({title: "Spaghetti and Meatballs"})
var dish_four = new Menu({title: "Lasagne"})
var dish_five = new Menu({title: "Chef Salad"})
var dish_six = new Menu({title: "Baby Back Ribs"})


var restaurant_one = new Restaurant({name: "Italian Stallion", address: {street: "324 Green Street", zipcode: 19456}, yelpUrl: "https://www.yelp.com/biz/neopol-savory-smokery-washington"})
var restaurant_two = new Restaurant ({name: "Greek Diner", address: {street: "506 8th St. SE", zipcode: 34578}, yelpUrl: "https://www.yelp.com/biz/roses-luxury-washington"})
var restaurant_three = new Restaurant ({name: "Carmine's Pizza Palace", address: {street: "506 8th St. SE", zipcode: 34578}, yelpUrl: "https://www.yelp.com/biz/keren-restaurant-washington"})
var restaurant_four = new Restaurant ({name: "Cindy's Place", address: {street: "8th Ave NW", zipcode: 89347}, yelpUrl: "https://www.yelp.com/biz/un-je-ne-sais-quoi-washington"})

var restaurants = [restaurant_one, restaurant_two, restaurant_three, restaurant_four]
var menus = [dish_one, dish_two, dish_three, dish_four, dish_five, dish_six]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].menus.push(menus[i], menus[i+1])
  restaurants[i].save((err, restaurant) => {
    if (err){
      console.log(err)
    } else {
      console.log(restaurant);
    }
  })
};
