var Schema = require("./db/schema.js")
var mongoose = require("./schema.js")
var seedData = require("./seeds.json")


var Restaurant = mongoose.model("Restaurant")

Restaurant.remove({}).then(() => {
  Restaurant.collection.insert(seedData).then(() => {
    process.exit()
  })
})
