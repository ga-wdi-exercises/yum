var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var MenuItemModel = Schema.MenuItemModel;

RestaurantModel.remove({});
MenuItemModel.remove({});

var albertos = new RestaurantModel({
  name: "Alberto's",
  address: {street: "Dupont Circle", zip: 20037},
  yelp: "www.yelp.com/albertos",
  menuItems: []
})
var deepDish = new MenuItemModel({title:"Deep Dish Pizza"});
var nyStyle = new MenuItemModel({title:"New York Style Pizza"});
albertos.menuItems.push(deepDish);
albertos.menuItems.push(nyStyle);
albertos.save();
deepDish.save();
nyStyle.save();

var taylors = new RestaurantModel({
  name: "Taylor's",
  address: {street: "M St. NW", zip: 20037},
  yelp: "www.yelp.com/taylors",
  menuItems: []
});
var cherrySt = new MenuItemModel({title: "Cherry St. Sub"});
var riceBalls = new MenuItemModel({title: "Rice Ball Thingies"});
taylors.menuItems.push(cherrySt);
taylors.menuItems.push(riceBalls);
taylors.save();
cherrySt.save();
riceBalls.save();

var thatPlaceDownstairs = new RestaurantModel({
  name: "That Place Downstairs",
  address: {street: "Downstairs", zip:18224},
  yelp: "www.yelp.com/that_place_downstairs",
  menuItems: []
});
var breakfast = new MenuItemModel({title: "Sausage & Cheese"});
thatPlaceDownstairs.menuItems.push(breakfast);
thatPlaceDownstairs.save();
breakfast.save();

// Answer 3
RestaurantModel.create({name:"test"});
// Answer 4
RestaurantModel.findOne({name:"Alberto's"});
// Answer 5
RestaurantModel.find({"address.zip":20037});
// Answer 6
RestaurantModel.findOneAndUpdate({name:"Alberto's"},{name:"Alberto's Pizzeria"});
// Answer 7
RestaurantModel.findOneAndRemove({name:"Taylor's"});
