var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

var restaurantsController = {
    show(req) {
        Restaurant.findOne({
            name: req.name
        }, (err, restaurant) => {
            if (err) {
                console.log(err);
            } else {
                console.log(restaurant);
            }
        })
    },
    indexByZipcode(req) {
        Restaurant.find({
            zipcode: req.zipcode
        }, (err, restaurants) => {
            if (err) {
                console.log(err);
            } else {
                console.log(restaurants);
            }
        })
    },
    update(req) {
        Restaurant.findOneAndUpdate({
            name: req.name
        }, {
            name: req.nameReplace
        }, {new: true}, (err, restaurant) => {
            if (err) {
                console.log(err);
            } else {
                console.log({restaurant});
            }
        })
    },
    delete(req){
      Restaurant.remove({name: req.name}, (err, restaurant) => {
        if (err){
          console.log(err);
        } else {
          console.log({success: true})
        }
      })
    }
}

restaurantsController.show({
    name: "Keren Restaurant"
});
restaurantsController.indexByZipcode({
    zipcode: 20009
});
restaurantsController.update({
    name: "Keren Restaurant",
    nameReplace: "Blah"
});
restaurantsController.delete({
  name: "Blah"
});
