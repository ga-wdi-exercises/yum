var Schema = require("../db/schema.js");

// I don't fully  understand this part, but we're calling our RestarauntModel which we exported from schema.js and we're calling is as a method on Schema and storing all of this in a variable called RestarauntModel
var Restaraunt = Schema.RestarauntModel;
var MenuItem = Schema.MenuModel;

// deleting all documents within the RestarauntModel so data isn't duplicated.  Needs callback functions (don't know why).  Usually need to use ".then" so all documents are deleted before we start to seed since the code runs aschronously
Restaraunt.remove({}, function(err){
  if(err){
    console.log(err)
  }
  else {
    console.log("Restaraunt documents were deleted.")
  }
});

MenuItem.remove({}, function(err){
  if(err){
    console.log(err)
  }
  else {
    console.log("Menu documents were deleted")
  }
});

var cosi = new Restaraunt({name: "Cosi", address:{ street: "K Street", zipcode: 20025}, yelp: "www.yelp.com/cosi",});
var ebbit = new Restaraunt({name: "Old Ebbit", address:{ street: "M Street", zipcode: 20025}, yelp: "www.yelp.com/ebbit",});

var burrito = new MenuItem({title: "burrito"});
var cookie = new MenuItem({title: "cookie"});
var steak = new MenuItem({title: "steak"});
var fries = new MenuItem({title: "french fries"});

restaurants = [cosi, ebbit]
menuItems = [burrito, cookie, steak, fries]

restaurants.forEach(function(restaurant, i){
  restaurant.items.push(menuItems[i], menuItems[i + 2])
  restaurant.save(function(err, docs){
    if(err){
      console.log(err)
    }
    else {
      console.log(docs)
    }
  });
});
