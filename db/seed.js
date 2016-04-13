var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel
var MenuModel = Schema.MenuModel

var Post_Pub = new RestaurantModel({
  name: "Post_Pub".
  address: ({
    "street": Nonya,
    "zipcode_property": 17
  })
});


Post_Pub.save(function(err, restaurant){
  if(err){
    console.log(err);
  }
  else{
    console.log(resturant);
  }
})

var item = new
