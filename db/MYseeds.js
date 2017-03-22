// const mongoose = require('./connection.js')
const Restaurant = require("./schema.js").Restaurant
const MenuItem = require("./schema.js").MenuItem

const seedRest = require('./seedRest.json')
const seedMenu = require('./seedMenu.json')

//Clear Restaurants
Restaurant.remove({}, (err) => {
    (err) ? console.log(err): console.log("Restaurants removed!");
    Restaurant.create(seedRest, (err) => {
        (err) ? console.log(err): console.log("New Restaurants seeded!, process.exiting");
        process.exit();
    });
});
MenuItem.remove({}, (err) => {
    (err) ? console.log(err): console.log("Menu Items removed!");
    MenuItem.create(seedMenu, (err) => {
        (err) ? console.log(err): console.log("New Menu Items seeded!, process.exiting");
        process.exit();
    });
});





db.restaurants.update({
    '': 'MongoDB Overview'
}, {
    $set: {
        'title': 'New MongoDB Tutorial'
    }
})

db.restaurants.findOne({
    name: "The Partisan"
}).insertMany([{
        item: "Red Apron Original"
    },
    {
        item: "Charcuterie"
    },
    {
        item: "Negroni"
    }
]);

db.restaurants.find().forEach(function() {
    print("user: " + myDoc.name);
});









// db.restaurants.insert( {name: "The Partisan"} )

// MenuItem.remove({}, (err) => {
//     (err) ? console.log(err): console.log("Menu Items removed!");
// })

//Lets make some RestaurantSchema
// let partisan = new Restaurant({
//     name: "The Partisan",
//     address: {
//         street: "709 D St",
//         zipcode: 20004
//     },
//     yelpUrl: 'https://www.yelp.com/biz/the-partisan-washington'
// })
//
// let passenger = new Restaurant({
//     name: "The Passenger",
//     address: {
//         street: "1539 7th St NW",
//         state: 20001
//     },
//     yelpUrl: 'https://www.yelp.com/biz/the-passenger-washington'
// })
//
// let espita = new Restaurant({
//     name: 'Espita Mezcalaria',
//     address: {
//         street: '1250 9th St NW',
//         zipcode: 20001
//     },
//     yelpUrl: 'https://www.yelp.com/biz/espita-mezcaleria-washington'
// })
//
// let chilango = new Restaurant({
//     name: "Tacos El Chilango",
//     address: {
//         street: "1119 V St NW",
//         zipcode: 20009
//     },
//     yelpUrl: 'https://www.yelp.com/biz/tacos-el-chilango-washington'
// })

//
// let burger = new MenuItem({
//     title: "Red Apron Original"
// })
// let charcuterie = new MenuItem({
//     title: "Speck"
// })
//
// let beer = new MenuItem({
//     title: "Atlas Rowdy Rye"
// })
//
// let shot = new MenuItem({
//     title: "Yellow Chartreuse"
// })
//
// let mayahuel = new MenuItem({
//     title: "Mayahuel"
// })
//
// let manatiel = new MenuItem({
//     title: "Manatiel"
// })
//
// let taco1 = new MenuItem({
//     title: "Taco De Carne Asada"
// })
//
// let taco2 = new MenuItem({
//     title: "Taco De Chorizo"
// })
//
// let restaurants = [partisan, passenger, espita, chilango]
// let items = [burger, charcuterie, beer, shot, mayahuel, manatiel, taco1, taco2]

// for (let i = 0; i < restaurants.length; i++) {
//     restaurants[i].items.push(items[i])
//     restaurants[i].save((err) => {
//         (err) ? console.log(err): console.log(restaurant);
//     })
// }
