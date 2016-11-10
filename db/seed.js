var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;


Restaurant.remove({}, function(err){
  console.log(err)
})
Menu.remove({}, function(err){
  console.log(err)
})
restaurant1 = new Restaurant ({ name: "Burgatory", address: { street: "299 West Bridge St. West Homestead, PA", zipcode: 15120, }, yelp: "http://www.burgatorybar.com/"})
restaurant2 = new Restaurant({name:"Primanti's ", address: {street: " 46 18th St., Pittsburgh, PA", zipcode: 15222}, yelp: " https://www.yelp.com/biz/primanti-bros-pittsburgh-15"})
restaurant3 = new Restaurant({name:"Red Rocks ", address: {street: "904 King St., Alexandria, VA", zipcode: 22314}, yelp: "https://www.yelp.com/biz/redrocks-neapolitan-bistro-alexandria "})
restaurant4 = new Restaurant({name:"Fat Hed's ", address: {street: "1805 E Carson St, Pittsburgh, PA", zipcode: 15203 }, yelp: " https://www.yelp.com/biz/fat-heads-saloon-pittsburgh"})

var menu1 = new Menu({title:"chili bacon burger"})
var menu2 = new Menu({title:"bacon chicken ranch"})
var menu3 = new Menu({title:"philly cheese steak"})
var menu4 = new Menu({title:"buffalo chicken pizza"})
