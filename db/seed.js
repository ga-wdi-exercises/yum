var Schema = require("../db/schema.js");

var ItemModel = Schema.ItemModel
var RestModel = Schema.RestModel

var doritosTaco = new ItemModel({
  title: "Doritos Taco"
})

var nachos = new ItemModel({
  title: "Nachos"
})

var tacoBell = new RestModel({
  name: "Taco Bell",
  address: {
    street: "123 fake street",
    zipcode: 20009,
  },
  yelpUrl: "tacobell.com",
  items: [doritosTaco, nachos]
})



tacoBell.save(function(err){
  if (err){
    console.log(err)
  }else {
    console.log("A restaurant was saved!");
  }
})
