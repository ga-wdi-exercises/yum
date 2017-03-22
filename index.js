var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;




// Restaurant.create({
//     name: 'Insomnia Cookies',
//     address: {
//         street: '2318 18th St NW',
//         zipcode: 20009
//     },
//     yelpUrl: 'https://www.yelp.com/search?find_desc=insomnia+cookies&find_loc=Washington%2C+DC'
// }, function(err, restaurant) {
//     (err) ? console.log(err): console.log(restaurant);
// });


function findByName(restaurant) {
    Restaurant.findOne({
        name: restaurant
    }, (err, rest) => {
        (err) ? console.log(err): console.log(rest);
    })
}

// findByName("The Blind Dog Cafe");

function findByZip(zip) {
    inZip = []
    Restaurant.find({}, (err, all) => {
        for (let i = 0, len = all.length; i < len; i++) {
            if (all[i].address.zipcode === zip) inZip.push(all[i])
        }
        console.log(inZip);
    })
}

// findByZip(20009);
