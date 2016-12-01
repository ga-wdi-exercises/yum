var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

MenuItem.remove({}, err => {
  if(err){
    console.log(err)
  }
});

var figandOlive = new Restaurant({
  name: 'Fig & Olive',
  address: {
    street: "street 1",
    zipcode: 1
  },
  yelpUrl: "https://www.yelp.com/biz/fig-and-olive-washington-2",
  items: []
})

var newRestaurant = new Restaurant({
  name: 'Eatery1',
  address: {
    street: "Another Street",
    zipcode: 2
  },
  yelpUrl: "https://www.espn.com",
  items: []
})

newRestaurant.save()

var item1 = new MenuItem({title: "Crostini"})
var item2 = new MenuItem({title: "Pasta"})
var item3 = new MenuItem({title: "Lamb Chops"})
var item4 = new MenuItem({title: "Sea Bass"})

var menuItems = [item1,item2,item3,item4]

for (i = 0; i < menuItems.length; i++) {
  figandOlive.items.push(menuItems[i])
  figandOlive.save((err, figandOlive) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(figandOlive);
    }
  })
}

// Restaurant.find({name: "Fig & Olive"})
// Restaurant.find({address: {zipcode: 1}})
// Restaurant.findOneAndUpdate({name: "Eatery1"}, {name: "Eatery 2"})
// Restaurant.findOneAndRemove({zipcode: 2})
