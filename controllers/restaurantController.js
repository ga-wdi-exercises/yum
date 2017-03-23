var Schema = require('./db/schema.js')
const RestaurantModel = Schema.RestaurantModel
const MenuItemModel = Schema.MenuItemModel

var restaurantsController = {
  index() {
    RestaurantModel.find({}, (err, docs) => {
      console.log(docs);
    })
  },

  show(req) {
    RestaurantModel.findOne({name: req.name}, (err, docs) => {
      console.log(docs);
    });
  },

  update(req) {
    RestaurantModel.findOneandUpdate({name: req.name}, req.body.restaurant, {new: true}, (err, docs) => {
      console.log(docs);
    })

  delete(req) {
    RestaurantModel.findOneandRemove({name: req.name}, req.body.restaurant, {new: true}, (err, docs) => {
      console.log(docs);
    })
  }

};
