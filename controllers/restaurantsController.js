const Restaurant = require('../db/models.js').Restaurant
const MenuItem = require('../db/models.js').MenuItem


var restaurantsController = {
  index(){
    Restaurant.find({}, (err, restaurants) => {
      console.log(restaurants)
    })
  },
  show(req){
    Restaurant.findOne({name: req.name}, (err, restaurant) => {
      console.log(restaurant);
    })
  },
  new(req){
    Restaurant.create({name: req.name, address: {street: req.street, zipcode: req.zipcode }, yelpUrl: req.yelpUrl})
  },
  showbyZip(req){
    Restaurant.find({"address.zipcode": req.zipcode}, (err, restaurants) => {
      console.log(restaurants)
    })
  },
  update(req, update){
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, (err, restaurant) => {
      if(err) {
        console.log(err)
      }
      else {
        console.log(restaurant);
      }
    });
  },
  destroy(req){
      Student.findOneAndRemove(req, (err, docs) => {
        if(err){
          console.log(err);
        }
        else{
          console.log(docs);
        }
      });
    }
};



// Create a new restaurant.
  // restaurantsController.new({name: "Patty's", address: {street: "523 Harbor Lane", zipcode: 22500 }, yelpUrl: "#"});
// Write a function or method that finds a restaurant by name.
  // restaurantsController.show({name: "Andy's"});
// Write a function or method that finds all restaurants by zipCode.
  // restaurantsController.showbyZip({"address.zipcode": 27150})
// Create a function that updates a restaurant.
  //restaurantsController.update({name: "Eric's"},{name: "E-ric's"})
// Write a function or method that deletes a restaurant.
  //restaurantsController.destroy({name: "Eric's"})
// Write methods to add and remove embedded menu item documents for a restaurant of your choosing.
  //


  // Add sub document
// function addItem(resturant, item){
//   Restaurant.findOne({name: resturant}, function(err, docs){
//     docs.items.push(new MenuItem({title: item}))
//     docs.save(function(err, results){
//       if(err){
//         console.log(err)
//       }
//       else{
//         console.log(results);
//       }
//     })
//   });
// }
//
// // Remove sub document
// function removeItem(resturant, item){
//   Restaurant.findOneAndUpdate({name: resturant}, {
//     $pull: { items: {title: item} }
//   },
//   {new: true}, function(err, docs){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(docs);
//     }
//   });
// }
