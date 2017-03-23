const Restaurant = require('./models.js').Restaurant
const seedData = require('./seedData.json')

Restaurant.remove({}, () => {
  Restaurant.create(seedData, () => {
    process.exit()
  })
})
