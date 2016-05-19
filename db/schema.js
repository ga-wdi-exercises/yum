var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost/yum";

mongoose.connect(mongoURI)

var Schema = mongoose.Schema;
  ObjectId = Schema.ObjectId;

var PizzaSchema = Schema({
  title: String,
  size: String,
  toppings: Array
})

var PizzaModel = mongoose.model("Pizza", PizzaSchema);

module.exports = {
  pizza: PizzaModel
};
