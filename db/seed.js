var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

Restaurant.remove({}, err => {
  if(err) {
    console.log(err);
  }
})

Menu.remove({}, err => {
  if(err) {
    console.log(err);
  }
})

// generate instances of Restaurant and Menu items
var tacos = new Menu({title: "Tacos de Pollo"})
var noodles = new Menu({title: "A.S.S Ramen"})

var mexican = new Restaurant({"name": "El Chucho",
                  "address": {
                  "street": "3313 11th St NW",
                  "zipcode": "20010"}
              })

var ramen =  new Restaurant({"name": "Chaplin's",
                  "address": {
                  "street": "1501 9th St NW",
                  "zipcode": "20001"}
              })

var menus = [tacos, noodles]
var restaurants = [mexican, ramen]
