var RestaurantModel = require("../models/restaurant")
var ItemMode = require("../models/item")

var restaurantsController = {
  index: function(req, res){
      RestaurantModel.find({}, function(err, docs){
        res.render("restaurants/index", {restaurants:docs})
      })
  },
  show: function(req, res){
    RestaurantModel.findById(req.params.id, function(err, doc) {
      res.render("restaurants/show", {restaurant: doc} )
    })
  },
  showByZip: function(req){
    Restaurant.find({"address.zipcode": req.zipcode}, function(err, docs){
      console.log(docs)
    })
  },
  update: function(req, update){
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err,docs){
      if(err){
        console.log(err)
      } else {
        console.log(docs)
      }
    })
  },
  destroy: function(req){
    Restaurant.findOneAndRemove(req, function(err,docs){
      if(err){
        console.log(err)
      } else {
        console.log(docs)
      }
    });
  },
  addItem: function(restaurant, item){
    Restaurant.findOne({name: restaurant}, function(err, docs){
      docs.items.push(new Item({title: item}))
      docs.save(function(err,results){
        if(err){
          console.log(err)
        } else {
          console.log(results)
        }
      })
    })
  },
  removeItem: function(restaurant, item){
    Restaurant.findOneAndUpdate({name: restaurant}, {
    $pull: { items: {title: item} }
  },
  {new: true}, function(err,docs){
    if(err) {
      console.log(err)
    } else {
      console.log(docs)
    }
    })
  }

}


module.exports = restaurantsController
