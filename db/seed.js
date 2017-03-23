var Schema = require("../db/schema.js");

const Restaurant = Schema.Restaurant
const Menu = Schema.Menu

Restaurant.remove({}).then(() => {
  process.exit()
})

Menu.remove({}).then(() => {
  process.exit()
})

var restaurant1 = new Restaurant({
   name: "Chik Fil A",
   address: {
     street: "12160 Sunset Hills Rd",
     zipcode: 20190
   },
   yelp: "https://www.yelp.com/biz/chick-fil-a-charlottesville-3"
});
var restaurant2 = new Restaurant({
   name: "Three Thai Sushi",
   address: {
     street: "410 Elden St",
     zipcode: 20170
   },
   yelp: "https://www.yelp.com/biz/three-thai-sushi-herndon"
});
var restaurant3 = new Restaurant({
   name: "Five Guys",
   address: {
     street: "11674 Plaza America Dr",
     zipcode: 20190
   },
   yelp: "https://www.yelp.com/biz/five-guys-burgers-and-fries-annandale"
});

var menuChik = new Menu({title: "Spicy Chicken Sandwich"})
var menuThai = new Menu({title: "Pad Thai"})
var menuFive = new Menu({title: "Bacon Cheeseburger"})

var restaurantLocations = [restaurant1,restaurant2, restaurant3]
var menus = [menuChik, menuThai, menuFive]

for(var i=0; i<restaurantLocations.length; i++){
  restaurantLocations[i].items.push(menus[i], menus[i+1]);
    restaurantLocations[i].save((err, restaurantLocations) => {
      if(err) {
        console.log(err);
      } else {
        console.log(restaurantLocations);
      }
    })
}
