var Schema = require("../db/schema.js");
var MenuItem = Schema.MenuItem;
var Restaurant = Schema.Restaurant;

var restaurantsController = {
  index: function(){
    Restaurant.find({zipcode}, function(err, docs){
      console.log(docs);
      return docs
    });
  },
  show: function(req){
    Restaurant.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
      return docs;
    });
  },
  update: function(req, update){[
    Restaurant.findOneAndUpdate(req, update, {new: true}, function(err, docs){
      if(err){
        console.log(err)
      } else{
        console.log(docs)
      }
    })
  ]}

}

// restaurantsController.index();
// restaurantsController.show({name: "chinaOne"});




module.exports = restaurantsController;
