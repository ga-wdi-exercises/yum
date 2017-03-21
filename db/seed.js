const models = require("./models")
const seeds = require("./seeds.json")

const Restaurant = models.Restaurant
const Item = models.Item

Restaurant.remove({}).then(() => {
  Restaurant.collection.insert(seeds).then(() => {
    process.exit()
  })
})
