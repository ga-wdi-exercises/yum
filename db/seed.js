//Connecting with the schema
var Schema = require("../db/schema.js");

var Menuitem = Schema.Menuitem;
var Restaurant = Schema.Restaurant;

// First we clear the database of existing data.
Menuitem.remove({}, err => {
  if(err){
    console.log(err)
  }
});

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

//Seed data
var menuitem1 = new Menuitem({title: "Salad"})
var menuitem2 = new Menuitem({title: "Chicken"})
var menuitem3 = new Menuitem({title: "Beef"})
var menuitem4 = new Menuitem({title: "Ice Cream"})
var menuitem5 = new Menuitem({title: "Pasta"})
var menuitem6 = new Menuitem({title: "Pizza"})

var restaurant1 = new Restaurant({name: "Busboys and Poets", address: {street: "14th St.", zipcode: 20011}, yelpUrl: "www.yelp.com/busboys"})
var restaurant2 = new Restaurant({name: "Rosa Mixicana", address: {street: "Gallery Place", zipcode: 20010}, yelpUrl: "www.yelp.com/rosamexicana"})

var items = [menuitem1, menuitem2, menuitem3, menuitem4, menuitem5, menuitem6]
var restaurants = [restaurant1, restaurant2]

//Seeding items
menuitem1.save((err, menuitem) => {
  if(err){
    console.error(err)
  } else {
    // console.log(menuitem)
  }
})
menuitem2.save((err, menuitem) => {
  if(err){
    console.error(err)
  } else {
    // console.log(menuitem)
  }
})
menuitem3.save((err, menuitem) => {
  if(err){
    console.error(err)
  } else {
    // console.log(menuitem)
  }
})
menuitem4.save((err, menuitem) => {
  if(err){
    console.error(err)
  } else {
    // console.log(menuitem)
  }
})
menuitem5.save((err, menuitem) => {
  if(err){
    console.error(err)
  } else {
    // console.log(menuitem)
  }
})
menuitem5.save((err, menuitem) => {
  if(err){
    console.error(err)
  } else {
    // console.log(menuitem)
  }
})

//assigning items to restaurants
for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1], items[i+2])
  restaurants[i].save((err, restaurant) => {
    if (err){
      console.log(err)
    } else {
      console.log(restaurant);
    }
  })
};
