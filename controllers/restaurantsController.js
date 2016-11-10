

var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Menu =Schema.Menu;


var restaurantsController = {
  index(){
       console.log("RETURNING from INDEX")
    Restaurant.find({}, (err, restaurants) => {
            console.log("Length = ",restaurants.length);
      console.log(restaurants);
    });
  },

  show(req){
    Restaurant.findOne(req, (err, restaurant) => {
      console.log(restaurant.name);
      console.log(restaurant.address.street);
      console.log(restaurant.address.zipcode);
      console.log(restaurant.yelpurl);
      restaurant.items.forEach (({title : t}) => console.log(t));
    });
  },

 //Write a function or method that finds a restaurant by name.

  findByName(req) {
    this.show(req)
  },

  //Write a function or method that finds all restaurants by zipCode.
  findByZipCode(zipCode) {
   Restaurant.find({address: {zipcode: zipCode.toString()}}, (err, restaurant) => {
     console.log("RETURNING from FindByZipCode")
     console.log("Length = ",restaurant.length)
     console.log(restaurant);
    //  console.log(restaurant.address.street);
    //  console.log(restaurant.address.zipcode);
    //  console.log(restaurant.yelpurl);
    //  restaurant.items.forEach (({title : t}) => console.log(t));
   });

 }


};
restaurantsController.index();

// restaurantsController.show({name:  "Glory Days Grill"});

// restaurantsController.findByName({name:  "Glory Days Grill"});

restaurantsController.findByZipCode(20171);
