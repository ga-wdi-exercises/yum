// requires mongoose dependencies
var mongoose = require('mongoose')
// connects us to the menuItems database in mongo
var conn = mongoose.connect('mongodb://localhost/menuItems')
// require our model definitions we defined earlier
var RestaurantModel = require("../models/restuarant")
var MenuItemModel = require("../models/reminder")
// removes any existing restuarants and menuItems from our database
RestaurantModel.remove({}, function(err){
})
MenuItemModel.remove({}, function(err){
})

// instantiates 3 restuarants and 6 menuItems in memory(but not saved yet) and
// shoves them into arrays
var bob = new RestaurantModel({name: "bob"})
var susy = new RestaurantModel({name: "charlie"})
var tom = new RestaurantModel({name: "tom"})

var reminder1 = new MenuItemModel({body: "reminder1!!"})
var reminder2 = new MenuItemModel({body: "reminder2!!"})
var reminder3 = new MenuItemModel({body: "reminder3!!"})
var reminder4 = new MenuItemModel({body: "reminder4!!"})
var reminder5 = new MenuItemModel({body: "reminder5!!"})
var reminder6 = new MenuItemModel({body: "reminder6!!"})

var restuarants = [bob, susy, tom]
var menuItems = [reminder1, reminder2, reminder3, reminder4, reminder5, reminder6]

// iterate through the restuarants to save them to the database after 2 menuItems
// have been added as subdocuments to the restuarant
for(var i = 0; i < restuarants.length; i++){
  restuarants[i].menuItems.push(menuItems[i], menuItems[i+3])
  restuarants[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("restuarant was saved")
    }
  })
}
