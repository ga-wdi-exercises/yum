var Schema = require("./schema.js");
// var mongoose = require("./connection.js")

var Restaurant = Schema.Restaurant // Schema is the code saved in schema.js
var Item = Schema.Item


Restaurant.remove({}).then(() => {
  Item.remove({}).then(() => {
    Restaurant.create({name: "Wingstop", address:{street: "14925 Shady Grove Rd", zipcode: 20850}, yelpUrl: "https://www.yelp.com/biz/wingstop-rockville"})
      .then(restaurant => {
        var originalHot = Item.create({title: "Original Hot"})
        var lemonPepper = Item.create({title: "Lemon Pepper"})
        restaurant.items.push(originalHot, lemonPepper)
        restaurant.save().then(() => {
          Restaurant.find({name: "Wingstop"}).then((restaurant) =>{
            console.log(restaurant)
          }).then(() => {
            Restaurant.find({"address.zipcode": 20850}).then((restaurant) => {  //to find an object value thats nested in an object we put it in quotes
              console.log(restaurant)
            })
          })
        })
      })
  })
})
