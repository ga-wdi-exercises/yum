// var Schema = require("../db/schema.js");
// const models = require("./models.js")
const Restaurant =  require("./schema.js").Restaurant
const Menu = require("./schema.js").Menu

Restaurant.remove({}).then(() => {
    process.exit();
});

Menu.remove({}).then(() => {
    process.exit();
});

var domMenuPizza = new Menu({title: "Pizza"});
var domMenuSpanish = new Menu({title: "Spanish"});

var DomPizza = new Restaurant({
  name: "Dom Pizza",
  address: {street: "Yeah-That-Way", zipcode: 12345},
  yelpUrl: "https://www.yelp.com/biz/mings-restaurant-washington",
  // items: foodJoints
});

var DomSpanish = new Restaurant({
  name: "Dom Spanish",
  address: {street: "Gotcha", zipcode: 98765},
  yelpUrl: "https://www.yelp.com/biz/the-smith-washington-2",
  // items: foodJoints
});

var foodJoints = [DomPizza, DomSpanish];
var foodList = [domMenuPizza, domMenuSpanish];

for(var i=0; i<foodJoints.length; i++){
 foodJoints[i].items.push(foodList[i], foodList[i+1]);
   foodJoints[i].save((err, foodJoint) => {
     if(err) {
       console.log(err);
     } else {
       console.log(foodJoint);
     }
   })
 }



// DomPizza.items.push(domMenuPizza);
// DomPizza.save((err, res) => console.log(res, err));
// DomSpanish.items.push(domMenuSpanish);
// DomSpanish.save();
