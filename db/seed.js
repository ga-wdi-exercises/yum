var Schema = require("../db/schema.js");

var Restaurant = Schema.RestaurantModel;
var MenuItem = Schema.MenuItemModel;

Restaurant.remove({}, function(err){
  console.log(err);
});
MenuItem.remove({}, function(err){
  console.log(err);
});

var res1 = new Restaurant({
  name: "Masa Luna",
  address: {
    street: "209 E Holly Ave",
    zipcode: 20164
  },
  yelpUrl: "https://www.yelp.com/biz/masa-luna-sterling"
});

var menu1 = new MenuItem({title: "Pollo Guisado"});

var res2 = new Restaurant({
  name: "The Pollo Factory",
  address: {
    street: "156 J Enterprise St",
    zipcode: 20164
  },
  yelpUrl: "https://www.yelp.com/biz/the-pollo-factory-sterling"
});

var menu2 = new MenuItem({title: "Aji de Gallina"});

var restaurants = [res1, res2];
var menuitems = [menu1, menu2];

restaurants.forEach(function(restaurant, i){
  restaurant.menuItem.push(menuitems[i]);
  restaurant.save(function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
});
