const Schema = require("./schema.js")
const seedData = require("./seeds.json")

const Restaurant = Schema.Restaurant
const Item = Schema.Item

Restaurant.remove({}).then(() => {
  Restaurant.collection.insert(seedData).then(() => {
    process.exit()
  })
})
