var Schema = require("../db/schema.js");
var models = require('./models.js')
var seeds = require('./seeds.json')

var Restaurant = models.Restaurant
var Food = models.Food

Restaurant.remove({}).then() => {
	Restaurant.collection.insert(seeds).then(() => {
		process.exit()
	})
}
