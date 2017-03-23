var mongoose = require('mongoose');
var Schema = require("../db/schema.js");



var RestaurantModel = Schema.RestaurantModel
var MenuModel = Schema.MenuModel

RestaurantModel.remove({}, function(err){
  console.log(err)
})
MenuModel.remove({}, function(err){
  console.log(err)
})


var menu1 = new MenuModel({ title: 'Entrée' })
var menu2 = new MenuModel({ title: 'Drink' })
var menu3 = new MenuModel({ title: 'Food' })
var menu4 = new MenuModel({ title: 'Ethiopian' })
var menu5 = new MenuModel({ title: 'Spanish' })

var Restaurant1 = new RestaurantModel({
  name: "G Street",
  address: {
    street: "1435 L st NW",
    zipcode: 20005
  },
  yelpUrl: 'https://www.yelp.com/biz/g-street-food-washington-4'
}

)


var Restaurant2 = new RestaurantModel({
  name: "nerds and nibblers",
  address: {
    street: "1451 L St NW",
    zipcode: 20005
  }, yelpUrl: 'https://www.yelp.com/biz/nerds-and-nibblers-washington'})

  var Restaurant3 = new RestaurantModel({
    name: "cosi",
    address: {
      street: "1700 Pennsylvania Ave NW",
      zipcode: 20005
    },
    yelpUrl: 'https://www.yelp.com/biz/cosi-washington-11'}

)

    var Restaurant4 = new RestaurantModel({
      name: "Graffiato",
      address: {
        street: "707 6th St NW",
        zipcode: 20001,

      },
      yelpUrl: 'https://www.yelp.com/biz/graffiato-washington'
    }

  )



var restaurants = [Restaurant1, Restaurant2, Restaurant3, Restaurant4]
var menus = [menu1, menu2, menu3, menu4, menu5]
console.log(menus)
console.log(restaurants)

for (var i =0; i< restaurants.length; i++){
  restaurants[i].items.push(menus[i], menus[i+1] )
  restaurants[i].save((err, restaurants) => {
   if (err){
     console.log(err);
   }
   else{
     console.log(restaurants);
   }
 });
}
