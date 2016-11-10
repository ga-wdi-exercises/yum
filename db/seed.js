var Schema = require("./schema.js")
var Items = require("./items.json")
var Restaurants = require("./restaurants.json")

var Item = Schema.Item
var Restaurant = Schema.Restaurant

var restaurant1 = Restaurant.create({
    "name": "El Rinconcito",
    "address": {
      "street": "1100 M St NW",
      "zipcode": 20005
    },
    "yelpUrl": "www.yelp.com/1",
    "items": [
      {"title": "Burger"},
      {"title": "Cocktail"}
    ]
  })
var restaurant2 = Restaurant.create({
    "name": "Copycat",
    "address": {
      "street": "1300 H St NE",
      "zipcode": 20003
    },
    "yelpUrl": "www.yelp.com/2",
    "items": [
      {"title": "Beer"},
      {"title": "Wine"}
    ]
  })
var restaurant3 = Restaurant.create({
    "name": "Maketto",
    "address": {
      "street": "1111 H St NE",
      "zipcode": 20003
    },
    "yelpUrl": "www.yelp.com/3",
    "items": [
      {"title": "Chicken"},
      {"title": "Beef"}
    ]
  })

/* I could not figure out how to do it this way and it seemed that everyone
agreed that as long as the object was embedded rather than referenced there was
no difference so I elected to get this done quickly rather than thoroughly
understand how to do this. Next time I will use an npm module that automatically
creates collections from json files.*/

// var item1 = Item.create({"title": "Chicken"})
// var item2 = Item.create({"title": "Beef"})
// var item3 = Item.create({"title": "Beer"})
// var item4 = Item.create({"title": "Cocktail"})
// var item5 = Item.create({"title": "Burger"})
//
// var items = [item1, item2, item3, item4, item5]
// var restaurants = [restaurant1, restaurant2, restaurant3]
//
// restaurants.forEach(function(restaurant, i){
//   restaurant.items.push(items[i], items[i+2])
//   restaurant.save(function(err, docs){
//     if(err){
//       console.log(err)
//     }
//     else{
//       console.log(docs)
//     }
//   })
// })
