var mongoose = require("../db/schema.js");
var seedData = require("./seeds.json")

var Restaurant = mongoose.model("Restaurant");
var MenuItem = mongoose.model("Menu");

Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit()
  })
})
