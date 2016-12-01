var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

Restaurant.remove({}, (err) => {
  console.log(err);
});

Menu.remove({}, (err) => {
  console.log(err);
})

var rest1 = new Restaurant({name: "bob's", address: {street: "10 Elm St", zip: 20010}, yelp: "www.yelp.com/bob's"})
var rest2 = new Restaurant({name: "dan's", address: {street: "15 Elm St", zip: 20050}, yelp: "www.yelp.com/dan's"})
var rest1 = new Restaurant({name: "Julie's", address: {street: "20 Elm St", zip: 20060}, yelp: "www.yelp.com/julie's"})


var item1 = new Menu({title:"pork" })
var item2 = new Menu({title:"beef" })
var item3 = new Menu({title:"chocolate" })
var item4 = new Menu({title:"sand" })
var item5 = new Menu({title:"chicken" })
var item6 = new Menu({title:"coffee" })

var menus = [item1, item2, item3, item4, item5, item6]
var restaurants = [rest1, rest2, rest3]

restaurants.forEach(function(restaurant, i) {
  restaurant.items.push(menus[i], menus[i+3])
  restaurant.save((err, docs) => {
    if(err){
      console.log(err);
    } else {
      console.log("saved!");
    }
  })
})
