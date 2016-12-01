var mongoose = require("mongoose");
var Schema = require("../db/schema.js");

var Restaurant = Schema.RestaurantModel;
var Menu = Schema.MenuModel;

Restaurant.remove({}, function(err){
  console.log(err)
});
Menu.remove({}, function(err){
  console.log(err)
});

var thai = new Restaurant({name: "Thai Palace", address: {street: "550 Shrine Way", zipcode: 20815}, yelp: "yelp.com/thaipalace"
});

var ital = new Restaurant({name: "Some Italian", address: {street: "123 Italy Rd", zipcode: 20815}, yelp: "yelp.com/itsitaly"
});

var nep = new Restaurant({name: "Cafe Everest", address: {street: "456 Himalaya St", zipcode: 20815}, yelp: "yelp.com/everest"
});

var menu1 = new Menu({title: ["Panang Curry"]});
var menu2 = new Menu({title: ["Chicken Parm"]});
var menu3 = new Menu({title: ["Momos"]});

var rests = [thai, ital, nep];
var menus = [menu1, menu2, menu3];

for (var i=0; i < rests.length; i++){
  rests[i].items.push(menus[i]);
  rests[i].save(function(err){
    if(err){
      console.log(err);
    }else{
      console.log("saved");
    }
  });
}
