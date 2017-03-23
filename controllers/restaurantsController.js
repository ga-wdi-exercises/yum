var Schema = require("../db/schema.js");
// const models = require("./models.js")
const Restaurant =  Schema.Restaurant
const Menu = Schema.Menu

var restaurantsController = {
  index() {
    Restaurant.find({address: {zipcode: req.zipcode}}, (err, restaurants) => {
    console.log(restaurants);
    })
  }

  
