var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

// var restaurantsController = {
//   show(req){
//     Restaurant.findOne({name: req.name}, (err, restaurant) => {
//       restaurant.items.forEach(item => {
//         console.log(item.title);
//       })
//       process.exit()
//     })
//   }
// }
//  restaurantsController.show({name: "Bluejacket"})
//
//  var restaurantsController = {
//    show(req){
//      Restaurant.findOne({zipcode: req.zipcode}, (err, restaurant) => {
//        restaurant.items.forEach(item => {
//          console.log(item.title);
//        })
//        process.exit()
//      })
//    }
//  }
//   restaurantsController.show({zipcode: 20003})

var restaurantsController = {
  update(req, update){
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, (err, restaurant) => {
      if(err){
        console.log(err)
      }
      else{
        console.log(restaurant)
      }

    })
  }
}

restaurantsController.update({name: "Bluejacket"}, {name: "Navyyard"})

var restaurantsController = {
  destroy(req){
    Restaurant.findOneAndRemove(req, (err, docs)=> {
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    })
  }
}
restaurantsController.destroy({name: "Bluejacket"})
