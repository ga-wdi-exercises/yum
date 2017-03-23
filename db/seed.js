const Item = require('./models.js').Item;
const Restaurant = require('./models.js').Restaurant;

const seedData = require("./seed.js");



Item.remove({}).then(function(){
  Item.collection.insert(seedData).then(function(){
    process.exit();
  });
});
Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit();
  });
});


//seedData

var burrito = new Item({title: "Burrito"});
var nacho = new Item({title: "Nacho"});
var taquito = new Item({title: "Taquito"});
var enchilada = new Item({title: "Enchilada"});
var papusa = new Item({title: "Papusa"});
var tamale = new Item({title: "Tamale"});
var rice = new Item({title: "Rice"});
var beans = new Item({title: "Beans"});

var chipotle = new Restaurant({name: "Chipotle", address: {street: "123 Jefferson St", zipcode: 20001}, yelpUrl: "#" });
var moes = new Restaurant({name: "Moes", address: {street:"456 Thomas Way", zipcode: 20003}, yelpUrl: "#" });
var albertos = new Restaurant({name: "Albertos", address: {street: " 789 Washington Ave", zipcode: 20002}, yelpUrl: "#" });



var restaurants = [chipotle, moes, albertos];
var items = [burrito, nacho, taquito, enchilada, papusa, tamale, rice, beans];

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1])
  restaurants[i].save((err, restaurant) => {
    if(err){
      console.log(err);
    }else{
      console.log(restaurant)
    }
  })
};
