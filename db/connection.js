var mongoose = require('mongoose')



mongoose.model("Restaurant", RestaurantSchema)
mongoose.model("Menu", MenuSchema)

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/yum")

module.exports = mongoose
