var mongoose = require('mongoose')

var Schema = require("./db/schema.js")

var Restaurant = Schema.Restaurant
var Menu = Schema.Menu


// find by name function
// function finByName(restaurant) {
//   Restaurant.findOne(name: restaurant, function() {
//     if (err){
//       console.log(err)
//     }else {
//       console.log(result)
//     }
//   })
// }
// Restaurant.findOne(name, callback)

//find by zip
// Restaurant.findBy(zip, callback)


var resturantsController = {
  index() {
    Restaurant.find({}, (err, students) => {
      console.log(students)
    })
  },
  show(resturant){
    Restaurant.findOne({name: name}, (err, resturant) => {
      console.log(resturant)
    })
  }
}
resturantsController.index()
// resturantsController.show({name: "savrajs"})
