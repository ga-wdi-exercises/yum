var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var menuSchema = new Schema({
  title: String
});

var Menu = mongoose.model("Menu", menuSchema);

module.export = {
  Menu: Menu
};
