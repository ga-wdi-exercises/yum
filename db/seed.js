const Item = require('./models.js').Item;
const Restaurant = require('./models.js').Restaurant;
const seedData = require("./seed.js");

Item.remove({}).then(function(){
  Item.collection.insert(seedData).then(function(){
    process.exit();
  });
});

Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit();
  });
});

var bibimbap = new Item({title: "Classic Bibimbap"});
var noodle = new Item({title: "Noodle Soup"});
var tofu = new Item({title: "Tofu Bibimbap"});
var kimchi = new Item({title: "Kimchi Bibimbap"});
var kalbi = new Item({title: "Kalbi Bibimbap"});
var bulgogi = new Item({title: "Bulgogi Bibimbap"});
var temple = new Item({title: "Temple Bibimbap"});
var chicken = new Item({title: "Chicken"});

var ricebar = new Restaurant({name: "Rice Bar", address: {street: "1020 19th St NW", zipcode: 20036}, yelpUrl: "#" });
var richbar = new Restaurant({name: "Rich Bar", address: {street:"1000 19th St NW", zipcode: 20037}, yelpUrl: "#" });
var ricebowl = new Restaurant({name: "Rice Bowl", address: {street: "1100 20th St NW", zipcode: 20038}, yelpUrl: "#" });

var restaurants = [ricebar, richbar, ricebowl];
var items = [bibimbap, noodle, tofu, kimchi, kalbi, bulgogi, temple, chicken];

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1])
  restaurants[i].save((err, restaurant) => {
    if(err){
      console.log(err);
    }else{
      console.log(restaurant)
    }
  })
};
