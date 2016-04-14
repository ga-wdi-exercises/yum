var Schema = require("../db/schema.js");

 var RestaurantModel = Schema.RestaurantModel;
 var MenuModel = Schema.MenuModel;


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
     RestaurantModel.findOne({zipcode: req.zipcode}, function(err, restaurant){
       if (err) {

       }
   )};
 };
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

var byZip = function(zipcode) {
  RestaurantModel.findOne({"address.zipcode:" zipcode}, function (err, restaurant){
    console.log(restaurants);
  });
};
