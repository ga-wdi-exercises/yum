var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant

var seedData = [
  {
    "name": "Kevin's",
    "address": {
              "street": "1133 15th Street",
              "zipcode": "20025"
    },
    "yelpUrl": "12345",
    "items": [
      {"title": "calzone"}
    ]
  },
  {
    "name": "Khoi's",
    "address": {
              "street": "1135 15th Street",
              "zipcode": "20025"
    },
    "yelpUrl": "12345",
    "items": [
      {"title": "garbage medley"},
      {"title": "trash mix"}
    ]
    }
]

Restaurant.remove({}).then(_=>{
  Restaurant.collection.insert(seedData)
  .then(_ => process.exit())
  .catch(err => console.log(err))
})



// var seedData = require("../db/seeds")
