var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.schema;

var RestaurantSchema = new Schema({

})

var MenuSchema = new Schema({

})

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var MenuModel = mongoose.model("Menu", MenuSchema);

module.exports = {
  RestaurantModel: RestaurantModel,
  MenuModel: MenuModel
}
