// var Schema = require("../db/schema.js");

const Restaurant = require("./schema.js").Restaurant
const Menu = require("./schema.js").Menu

Restaurant.remove({}).then(() => {
  process.exit();
});

var BbMenuPizza = new Menu ({title:"Pizza"});
var BbMenuPizza = new Menu ({title: "English"});

var BbPizza = new Restaurant({
  name: "BB'S PIZZA, THE BEST PIZZA IN THE WORLD CRAIG!",
  address: {street: "123 Tioga", zipcode: 111111},
  yelpUrl: "https://www.yelp.com/",
});

var BbsPizza = new Restaurant({
  name: "BB's English",
  address: {street: "14th Street", zipcode: 000000},
  yelpUrl: "https://www.yelp.com/"
});

var foodRestaurants = [BbPizza, BbsPizza];
var foodLists = [BbPizza, BbEnglish];

for(var i=0; i<foodRestaurants.length; i++;{
  foodRestaurants[i].items.push(foodLists[i],foodLists[i+1]);
    foodRestaurants[i].save((err, foodRestaurants) => {
      if(err) {
        console.log(err);
      } else {
        console.log(foodRestaurants)
      }
      }
    })
})
