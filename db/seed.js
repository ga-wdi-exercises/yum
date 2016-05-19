var mongoose = require("./connection.js");
var seedData = require("./seeds.json");

var Restaurant = mongoose.model("Restaurant");

Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit();
  });
});
