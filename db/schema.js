
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection
db.on('error', err => {
  console.log(err)
})
db.once('open', () => {
  console.log('db connected')
})


var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var MenuSchema = new Schema ({
  title: String
})

var RestSchema = new Schema ({
  name: String,
  address: {
    street: String,
    zip: Number
  },
  yelpUrl: String,
  items: [MenuSchema]
})


var Restaurant = mongoose.model("Restaurant", RestSchema)
var Menu = mongoose.model("Menu", MenuSchema)

//code for not using .create
var nats = new Restaurant ({name: "Nat's", address:{ street: "123 Street", zip:22222}, yelpUrl: "wwww.nats.yelp"})
var menu1 = new Menu ({title: "Spaghetti"})


nats.save((err, restaurant) => {
  if (err){
    console.log(err)
  } else {
    console.log(restaurant)
  }
})

module.exports ={
  Restaurant: Restaurant,
  Menu: Menu
}


// Restaurant.create({name: "Nat's", address:{ street: "123 Street", zip:22222 }, yelpUrl: "wwww.nats.yelp"} => {
//   if (err){
//     console.log(err)
//   } else {
//     console.log(restaurant)
//   }
// })
