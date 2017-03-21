const models = require('./models.js')
const seeds = require('./seeds.json')

const Restaurant = models.Restaurant
const Item = models.Item

Restaurant.remove({}).then(() => {
  Restaurant.collection.insert(seeds).then(() => {
    process.exit()
  })
})
