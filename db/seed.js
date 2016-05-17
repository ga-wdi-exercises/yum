var Schema = require("../db/schema.js");

var Restaurants = {
  name: "Bob Pizza's Artisinal Apartment Sandwiches",
  address: {
    street: "666 Condos Ave",
    zip: 90210
  },
  yelp_url: "http://www.yelp.com/Bob_Pizza",
  items: bobPizzaItems
};

var bobPizzaItems = [
  {title: "PizzaBurgs"},
  {title: "Servo Motor Parts"},
  {title: "PizzaBurgs"}
]

//module.export something?
