var mongoose = require("./connection");
var seedData = require("./seeds");

var Restaurant = mongoose.model("Restaurant");

Restaurant.remove({}).then(function(err){
  Restaurant.collection.insert(seedData[0])
});

var MenuItem = mongoose.model("MenuItem");

MenuItem.remove({}, function(err){
  MenuItem.collection.insert(seedData[1])
});
