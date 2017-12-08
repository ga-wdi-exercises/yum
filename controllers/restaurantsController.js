const Schema = require('../db/schema.js')
const Restaurant = Schema.Restaurant

let restaurantsController = {
  show(restaurant_name) {
    Restaurant.findOne({name: restaurant_name}, (err, restaurant) => {
      err ? console.log(err) : console.log(restaurant)
    })
  }

  show(restaurantZip) = {
    Restaurant.find({address.zipcode: restaurantZip}, (err, restaurant) => {
      err ? console.log(err) : console.log(restaurant)
    })
  }

  update() {
    Restaurant.findOneAndUpdate({}, (err, restaurant) => {
      err ? console.log(err) : console.log(restaurant)
    })
  }

  delete() {
    Restaurant.findOneAndRemove({name: name}, (err, docs) => {
      err ? console.log(err) : console.log(docs)
    })
  }
}
