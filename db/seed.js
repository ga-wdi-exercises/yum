var mongoose = require("./connection");
var seedData = require("./seeds");

var MenuItem = mongoose.model("MenuItem");
var Restaurant = mongoose.model("Restaurant");

Restaurant.remove({}).then(function(err){
  for(var i=0; i<5; i++){
    r = new Restaurant(seedData[i]);
    r.save();
  };
});
