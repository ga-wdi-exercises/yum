var Schema     = require("../db/schema.js");
var mongoose   = require('mongoose');
var seedData   = require('./seeds');
var Restaurant = mongoose.model("Restaurant")

Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit();
  })
})


var restaurant1 = new Restaurant({name: "Pho DC", address: "608 H St NW, Washington, DC" 20001, yelpUrl: "https://www.yelp.com/biz/pho-dc-washington-2", items: ["DC Spring Roll", "Curry Puff Roll", "Garden Roll"]});
var restaurant2 = new Restaurant({name: "Le Diplomate", address: "1601 14th Street NW, Washington, DC" 20009, yelpUrl: "https://www.yelp.com/biz/le-diplomate-washington", items: ["Petit Plateau", "Grand Plateau", "Belon Oysters"]});
var restaurant3 = new Restaurant({name: "Station 4", address: "1101 4th St SW, Washington, DC" 20024, yelpUrl: "https://www.yelp.com/biz/station-4-washington-3", items: ["Cuban Sandwich", "Salmon Blt", "Turkey Club"]});
var restaurant4 = new Restaurant({name: "Justin’s Cafe", address: "1025 1st St SE, Washington, DC" 20003, yelpUrl: "https://www.yelp.com/biz/justins-cafe-washington-2", items: ["Rutledge", "Ancrum", "King"]});
var restaurant5 = new Restaurant({name: "Mandu", address: "1805 18th St NW, Washington, DC" 20009, yelpUrl: "https://www.yelp.com/biz/mandu-washington", items: ["
Bulgogi", "Galbi", "Dak Gui"]});
var restaurant6 = new Restaurant({name: "Banana Cafe & Piano Bar", address: "500 8th St SE, Washington, DC" 20003, yelpUrl: "https://www.yelp.com/biz/banana-cafe-and-piano-bar-washington", items: ["Camarones", "
Pollo", "Stuffed Plantains"]});
