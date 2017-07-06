var Schema = require("../db/schema.js");
var mongoose = require("./connection.js")

// var seedData = require("./seeds.json")

var Restaurant = mongoose.model("Restaurant")

Restaurant.remove({}).then(() => {
  Restaurant.collection.insert(seedData).then(() =>{
    process.exit()
  })
})

var benAndJerrys = new Restaurant({name: "Ben and Jerrys", address: [street: "123 Main Street", zipcode: 10978]})
