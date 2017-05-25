var mongoose = require('mongoose');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log("database has been connected!");
});

var Schema = mongoose.Schema

var MenuSchema = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuSchema]
});

var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var MenuItem = mongoose.model("Menu", MenuSchema)


var MenuSchema = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuSchema]
});

Restaurant.remove({}, (err) => {
  if(err){
    console.log(err)
  }
})

MenuItem.remove({}, (err) => {
  if(err){
    console.log(err)
  }
})

// Buredo
var sophie = new MenuItem({
  title: "Sophie"
})

var paimai = new MenuItem({
  title: "Pai Mai"
})

var buredo = new Restaurant({
  name: "Buredo",
  address: {
    street:"825 14th St NW Washington, DC",
    zipcode: 20005
  },
  yelpUrl: "https://www.yelp.com/biz/buredo-washington-3",
  items: [sophie, paimai]
})

// Busboys and Poets
var oaxaca = new MenuItem({
  title: "Oaxaca Omelette"
})

var sweetpotato = new MenuItem({
  title: "Sweet Potato Hash"
})

var busboys = new Restaurant({
  name: "Busboys and Poets",
  address: {
    street: "2021 14th St NW Washington, DC",
    zipcode: 20009
  },
  yelpUrl: "https://www.yelp.com/biz/busboys-and-poets-washington-9?osq=Busboys+and+Poets",
  items: [oaxaca]
})


// Save all menu items

// busboys.save((err, busboys) => {
//   if(err){
//     console.error(err)
//   } else {
//     console.log(busboys)
//     process.exit()
//   }
// })
