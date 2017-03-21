const mongoose = require("./connection")
const seedData = require("./seeds.json")

const Restaurant = mongoose.model("Restaurant")
const Item = mongoose.model("Candidate")

Restaurant.remove({}).then(() => {
  Restaurant.collection.insert(seedData).then(() => {
    process.exit()
  })
})
