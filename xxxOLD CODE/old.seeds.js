var mongoose = require("./connection");
var seedData = require("./seeds");

var Restaurant = mongoose.model("Restaurant");

Restaurant.remove({}).then(function(){
  Restautant.collection.insert(seedData).then(function(){
    process.exit();
  })
})
