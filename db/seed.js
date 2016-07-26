var mongoose = require('mongoose');
var Schema = require("./schema.js");
console.log("seeds starting");

var Menu = Schema.MenuModelxxx;
var Restaurant = Schema.RestaurantModel;

Restaurant.remove({}, function(err){
  console.log("remove Restaurant");
  if(err) {
    console.log(err);
  } else {
    console.log("No Error - Restaurant collection cleared")
  }
});

Menu.remove({}, function(err){
  console.log("remove Menu");
  if(err) {
    console.log(err);
  } else {
    console.log("No Error - Menu collection cleared")
  }
});



var rioGrande = new Restaurant ({
  name: "Uncle Julio's",
  address: {
    street: "4301 Fairfax Drive",
  city: "Arlington",
state: "VA",
zipcode: "22203"
},
yelpUrl: "http://www.yelp.com/biz/uncle-julios-arlington-2?osq=Uncle+Julio%27s+Fine+Mexican+Food"
})

var laCaraquena = new Restaurant  ({
  name: "La Caraquena",
  address: {
    street: "300 W. Broad St.",
  city: "Falls Church",
  state: "VA",
  zipcode: "22046"
  },
  yelpUrl: "http://www.yelp.com/biz/la-caraquena-falls-church-2"
})

var rioMenu1 = new Menu ({
  title: "Fajitas"
})

var rioMenu2 = new Menu ({
  title: "Margaritas"
})

var rioMenu3 = new Menu ({
  title: "Quersadillas"
})

var laCarMenu1 = new Menu ({
  title: "Arepas"
})

var laCarMenu2 = new Menu ({
  title: "Pabellon"
})

var laCarMenu3 = new Menu({
  title: "Fried Yucca"
})
// ok, how do i load these bad boys?
rioGrande.Menu.push(rioMenu1, rioMenu2, rioMenu3);
rioGrande.save(function(err){
  if (err){
    console.log(err)
  } else {
    console.log("Rio Grande saved!");
  }
})

laCar.Menu.push(laCarMenu1, laCarMenu2, laCarMenu3);
laCaraquena.save(function(err){
  if (err){
    console.log(err)
  } else {
    console.log("Rio Grande saved!");
  }
});


process.exit();
