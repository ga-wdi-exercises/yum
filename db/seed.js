var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/yum')



Restaurant.remove({}, function(err){
  console.log("restaurant removal err:", err)
})
MenuItem.remove({}, function(err){
  console.log("menuitem removal err:",err)
})

var menuitem1 = new MenuItem({body: "asparagus!!"})
var menuitem2 = new MenuItem({body: "broccoli!!"})
var menuitem3 = new MenuItem({body: "cucumber!!"})
var menuitem4 = new MenuItem({body: "dinner!!"})
var menuitem5 = new MenuItem({body: "earofcorn!!"})
var menuitem6 = new MenuItem({body: "filo do!!"})

var arbys = new Restaurant({
  name: "arbys",
  items: [menuitem1, menuitem2, menuitem3]
})
var charlie = new Restaurant({name: "charlie"})
var tom = new Restaurant({name: "tom"})


var restaurants = [arbys, charlie, tom]
// var menuitems = [menuitem1, menuitem2, menuitem3, menuitem4, menuitem5, menuitem6]

for(var i = 0; i < restaurants.length; i++){
  // restaurants[i].menuitems.push(menuitems[i], menuitems[i+3])

  restaurants[i].save(function(err){
    if (err){
      console.log("err:",err)
    }else {
      console.log("restaurant was saved")
    }
  })
}
