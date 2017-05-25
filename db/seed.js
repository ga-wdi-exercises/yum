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


var rest1 = new Restaurant({name: "Cookies Corner", address:{street: "1970 2nd St NW", zipcode: 20001}, yelpUrl: "http://www.yelp.com/biz/cookies-corner-washington"})
var rest2 = new Restaurant({name: "The Blind Dog Cafe", address:{street: "944 Florida Ave", zipcode: 20001}, yelpUrl: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
var rest3 = new Restaurant({name: "Birch & Barley", address:{street: "1337 14th St NW", zipcode: 20005}, yelpUrl: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
var rest4 = new Restaurant({name: "Captain Cookie and the Milk Man", address:{street: "Dupont Circle", zipcode: 20036}, yelpUrl: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
var rest5 = new Restaurant({name: "J's Cookies", address:{street: "1700 N Moore St", zipcode: 22209}, yelpUrl: "http://www.yelp.com/biz/js-cookies-arlington"})

var item1 = new MenuItem({title: "Pineapple Duck"})
var item2 = new MenuItem({title: "Meatloaf"})
var item3 = new MenuItem({title: "Spinach and Artichoke Dip"})
var item4 = new MenuItem({title: "Sweet and Sour Tofu"})
var item5 = new MenuItem({title: "Falafel Sandwich"})
var item6 = new MenuItem({title: "Fried Shrimp"})
var item7 = new MenuItem({title: "Baked Alaska"})

var restaurants = [rest1, rest2, rest3, rest4, rest5]
var items = [item1, item2, item3, item4, item5, item6, item7]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1])
  restaurants[i].save((err, restaurant) => {
    if (err){
      console.log(err)
    } else {
      console.log(restaurant);
    }
  })
};
