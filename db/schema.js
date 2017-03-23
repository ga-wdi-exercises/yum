const mongoose = require("./connection.js");
let Schema = mongoose.Schema;

let MenuSchema = new Schema({
 title: String
});

var RestaurantSchema = new Schema({
 name: String,
 address: {
   street: String,
   zipcode: Number
 },
 yelpUrl: String,
 items: [MenuSchema]
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
const Menu = mongoose.model("Menu", MenuSchema)

module.exports = {
 Restaurant,
 Menu
}
