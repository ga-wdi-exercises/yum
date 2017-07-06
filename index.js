var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
const menuModel = Schema.menuModel();
const restaurantModel =Schema.reataurantModel();

const shokiBowl = new menuModel({title: 'Shoki Bowl' })
const spicyMiso = new menuModel({title: 'Spicy Miso'})
const bulgogi = new menuModel({title: 'Bulgogi'})

const sakuramen = new restaurantModel({
    name: 'Sakuramen',
    address: {
        street: '2441 18th St NW Washington, DC',
        zipcode: 20009
    },
    yelpUrl: 'https://www.yelp.com/biz/sakuramen-washington',
    items: [shokiBowl, spicyMiso, bulgogi]
})