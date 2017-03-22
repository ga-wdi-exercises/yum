const mongoose = require("./connection.js")

const Schema = mongoose.Schema

const MenuSchema = new Schema({
  title: String
})

const RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: String
  },
  yelpUrl: String,
  items: [ MenuSchema ]
  // items: [ {type: Schema.ObjectId, ref:"Menu"}]
})

const Restaurant = mongoose.model("Restaurant" , RestaurantSchema)
const Menu = mongoose.model("Menu", MenuSchema)

let sushiBurrito = new Menu({
  title: "Sushi Burrito"
})

let buredo = new Restaurant({
  name: "Buredo",
  address: {
    street: "825 14th St NW, Washington, DC",
    zipcode: "20005"
  },
  yelpUrl: "https://www.yelp.com/biz/buredo-washington-3",
  items: sushiBurrito
})

let buredoMenu1 = new Menu({
  title: "Crazy 88"
})
let buredoMenu2 = new Menu({
  title: "Hanzo"
})
let buredoMenu3 = new Menu({
  title: "Beatrix"
})

buredo.items.push(buredoMenu1, buredoMenu2, buredoMenu3)

buredo.save().then(restaurant => {
  console.log(restaurant);
}).catch(err => {
  console.log(err);
})

module.exports = {
  Restaurant,
  Menu
}
