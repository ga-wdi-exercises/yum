var Schema = require("./schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem


Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});
MenuItem.remove({}, err => {
  if(err){
    console.log(err)
  }
});
