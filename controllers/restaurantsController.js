var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem


//console.log(Restaurant);

var restaurantsController = {
  index: function(req, res) {
    Restaurant.find({}, function(err, docs){
      res.render("restaurants/index", {restaurants: docs})
    });
  },
  showByName: function(req) {

    Restaurant.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
    })
  },
  showByZip: function(req) {
    console.log(req);
    console.log("!!!!",req.zipcode);

    Restaurant.find({ 'address.zipcode': req.zipcode}, function(err, docs){
      console.log(docs);
    });

  },
  update: function(req) {
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, docs){
      if(err){
        console.log(err);
      }
      else {
        console.log(docs);
      }
    })
  },
  destroy: function(req){
    Restaurant.findAndRemove(req, function(err, docs){
      if(err){
        console.log(err);
      }
      else {
        console.log(docs);
      }
    })
  },
  addItem: function(restaurant, item){
    Restaurant.findOne({name: restaurant}, function(err, docs){
      docs.items.push(new Item( {title: item}))
      docs.save(function(err, results){
        if(err){
          console.log(err);
        } else {
          console.log(results);
        }
      })
    })
  },
  removeItem: function(restaurant, item){
    Restaurant.findAndUpdate({name: restaurant}, {
      $pull: {items: {title: item}}
    },
  {new: true}, function(err,docs){
    if (err) {
      console.log(err);

    } else {
      console.log(docs);
    }
  })
  }

}
module.exports = restaurantsController;
