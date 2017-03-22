const Restaurant = require("./schema.js").Restaurant
const Menu = require("./schema.js").Menu

Restaurant.remove({}, err => {
  if(err){
    console.log(err);
  }
})
Menu.remove({}, err => {
  if(err){
    console.log(err);
  }
})
// stole seed data from the solution for convenience
resturant1 = new Restaurant({ name: "Cookies Corner", address: { street: "1970 2nd St NW", zipcode: 20001, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"})
resturant2 = new Restaurant({ name: "The Blind Dog Cafe", address: { street: "944 Florida Ave", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
resturant3 = new Restaurant({ name: "Birch & Barley", address: { street: "1337 14th St NW", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})
resturant4 = new Restaurant({ name: "Captain Cookie and the Milk Man", address: { street: "Dupont Circle", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5"})
resturant5 = new Restaurant({ name: "J’s Cookies", address: { street: "1700 N Moore St", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington"})


let item1 = new Menu({title: "chocolate chip cookie"})
let item2 = new Menu({title: "sugar cookie"})
let item3 = new Menu({title: "peanut butter cookie"})
let item4 = new Menu({title: "cheese pizza"})
let item5 = new Menu({title: "salad"})
let item6 = new Menu({title: "sub"})
let item7 = new Menu({title: "pasta"})

let Menus = [item1, item2, item3, item4, item5, item6, item7]
let resturants = [resturant1, resturant2, resturant3, resturant4, resturant5]

resturants.forEach(function(resturant, i){
  resturant.items.push(Menus[i], Menus[i+3]);
  resturant.save(function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
});
