var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant
var Item = Schema.Item

var restaurantsController = {
  index: function(){
      Restaurant.find({}, function(err, docs){
        console.log(docs)
      })
  },
  showByName: function(req){
    Restaurant.findOne({"name": req.name}, function(err, docs) {
      console.log(docs);
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

mongoose.controller("restaurantsController", restaurantsController)

module.exports = restaurants
