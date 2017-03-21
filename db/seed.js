var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

 // Clear the database of existing restaurants & menus
Restaurant.remove({}, err => {
  if(err) {
    console.log(err)
  }
});

MenuItem.remove({}, err => {
  if(err){
    console.log(err)
  }
});

 // Generate instances of Restaurant and Menu
var resto1 = new Restaurant({name: "Taco Bamba", address: {street: "164 Maple Avenue W", zipcode: 22180  }, yelpUrl: "https://www.yelp.com/biz/taco-bamba-vienna"})
var resto2 = new Restaurant({name: "Daikaya", address: {street: "705 6th St NW", zipcode: 20001 }, yelpUrl: "https://www.yelp.com/biz/daikaya-ramen-shop-washington"})
var resto3 = new Restaurant({name: "Astro Doughnuts", address: {street: "Leesburg Pike", zipcode: 22043 }, yelpUrl: "https://www.yelp.com/biz/astro-doughnuts-and-fried-chicken-falls-church"})
var resto4 = new Restaurant({name: "Capital Grille ", address: {street: "601 Pennsylvania Ave. NW", zipcode: 20004 }, yelpUrl: "https://www.yelp.com/biz/the-capital-grille-washington-2"})

var menu1 = new MenuItem({title: "Black Pearl Tilapia Taco"})
var menu2 = new MenuItem({title: "Shredded Pork Confit Carnitas"})
var menu3 = new MenuItem({title: "Seared Enoki Mushrooms"})
var menu4 = new MenuItem({title: "Grilled Octopus"})
var menu5 = new MenuItem({title: "Honey Sriracha Buffalo Wings"})
var menu6 = new MenuItem({title: "Maple Bacon Doughnuts"})
var menu7 = new MenuItem({title: "Porcini Rubbed Bone-in Ribeye with 15-year Aged Balsamic"})
var menu8 = new MenuItem({title: "Shaved Brussels Sprouts Salad"})

var restaurants = [resto1, resto2, resto3, resto4]
var menuItems = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8]



for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(menuItems[i], menuItems[i+1])
  restaurants[i].save((err, restaurant) => {
    if (err){
      console.log(err)
    } else {
      console.log(restaurant);
    }
  })
};






 // Assign menus to each restaurant using forEach
  //  restaurants.forEach((restaurant, i) => {
  //    restaurant.menus.push(menus[i], menus[i+1])
  //    restaurant.save((err, restaurant) => {
  //      if (err) {
  //        console.log(err)
  //      } else {
  //        console.log(restaurant);
  //      }
  //    })
  //  })
