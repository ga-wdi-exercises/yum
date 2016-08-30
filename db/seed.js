var mongoose  = require("./connection");
var seedData  = require("./seeds");
mongoose.Promise = global.Promise;
var Restaurant = mongoose.model("Restaurant");
var Menu = mongoose.model("Menu");

Menu.remove({})

Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit();
  });
});
