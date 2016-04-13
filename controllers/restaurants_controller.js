var Schema = require("../db/schema.js");

 var MenuModel = Schema.MenuModel;
 var RestaurantModel = Schema.RestaurantModel;

 var restaurantsController = {
   index: function(){
     RestaurantModel.find({}, function(err, restaurants){
       if (err) {
         console.log(err);
       } else {
         console.log(restaurants);
       }
     });
   },
   byName: function(req){
     RestaurantModel.findOne({name: req.name}, function(err, restaurant){
       if (err) {
         console.log(err);
       } else {
         console.log(restaurant);
       }
     });
   },
   byZip: function(req){
     RestaurantModel.findOne({name: req.name}, function(err, restaurant){
       if (err) {
         console.log(err);
       } else {
         console.log(restaurant);
       }
     });
   },
   update: function(req, update){
     RestaurantModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, restaurant){
       if (err){
         console.log(err);
       } else {
         console.log(restaurant);
       }
     });
   },
   destroy: function(req){
     RestaurantModel.findOneAndRemove({name: req.name}, function(err, restaurant){
       if (err) {
         console.log(err);
       } else {
         console.log(restaurant);
       }
     });
   }
 };
