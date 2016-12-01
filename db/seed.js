
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var RestaurantModel = Schema.RestaurantModel
var MenuModel = Schema.MenuModel


RestaurantModel.remove({}, function(err){
  console.log(err)
});
MenuModel.remove({}, function(err){
  console.log(err)
});


var Post_Pub = new RestaurantModel({
  name: "Post_Pub".
  address: ({
    "street": Nonya,
    "zipcode_property": 17
  })
});

var Subway = new RestaurantModel({
  name: "Subway".
  address: ({
    "street": Nada,
    "zipcode_property": 77
  })
});

var Roses = new RestaurantModel({
  name: "Roses".
  address: ({
    "street": East,
    "zipcode_property": 700
  })
});

var menu1 = new MenuModel ({title: "pretzels"})
var menu2 = new MenuModel ({title: "goldfish"})
var menu3 = new MenuModel ({title: "bananas"})




var restaurants = [Post_Pub, Subway, Roses]
var menu = [menu1, menu2, menu3]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].menu.push(menu[i], project[i+2])
  restaurants[i].save(function(err){
    if (err){
      console.log(err)
    } else {
      console.log("item saved");
    }
  });
});
//
//
// Post_Pub.save(function(err, restaurant){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(resturant);
//   }
// })
