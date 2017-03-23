const Restaurant = require('./models.js').Restaurant
const MenuItem = require('./models.js').MenuItem

Restaurant.remove({}, function(err) {
    if (err) {
        console.log(err);
    }
});

MenuItem.remove({}, function(err) {
    if (err) {
        console.log(err);
    }
})

var restaurant1 = new Restaurant({
    name: "Modern Market",
    address: {
        street: "1010 Vermont Ave NW",
        zipcode: 20005,
    },
    yelpUrl: "https://www.yelp.com/biz/modern-market-eatery-washington?osq=modern+market"
})
var restaurant2 = new Restaurant({
    name: "Potbellys",
    address: {
        street: "1701 Pennsylvania Ave NW",
        zipcode: 20006,
    },
    yelpUrl: "https://www.yelp.com/biz/potbelly-sandwich-shop-washington-13?osq=Potbelly+Sandwich+Shop"
})
var restaurant3 = new Restaurant({
    name: "Nerds & Nibblers",
    address: {
        street: "1451 L St NW",
        zipcode: 20005,
    },
    yelpUrl: "https://www.yelp.com/biz/nerds-and-nibblers-washington"
})

var pizza = new MenuItem({
    title: "Pizza"
})
var fries = new MenuItem({
    title: "Fries"
})
var burger = new MenuItem({
    title: "Hamburger"
})
var salad = new MenuItem({
    title: "Salad"
})

var restaurants = [restaurant1, restaurant2, restaurant3]
var items = [pizza, fries, burger, salad]

for(i=0; i<restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1])
    restaurants[i].save(function(err, docs){
      if (err) {
        console.log(err);
      } else {
        console.log(docs);
      }
    })
};
