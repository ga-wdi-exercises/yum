var mongoose = require("mongoose");
var Schema = require("./schema.js");
var Restaurant = Schema.Restaurant;
var Address = Schema.Address;
var MenuItem =Schema.MenuItem;

Restaurant.remove({}, function(err){
  if(err){
    console.log(err);
  }
})

Address.remove({}, function(err){
  if(err){
    console.log(err);
  }
})

MenuItem.remove({}, function(err){
  if(err){
    console.log(err);
  }
})

var chinese = new Restaurant({name: "Chinese", yelpUrl: "yelp1.com"});
var japanese = new Restaurant({name: "Japanese", yelpUrl: "yelp2.com"});
var cookies = new Restaurant({name: "Cookies", yelpUrl: "yelp3.com"});

var address1 = new Address({street: "Main", zipcode: "12345"});
var address2 = new Address({street: "Maple", zipcode: "67890"});
var address3 = new Address({street: "Central", zipcode: "24689"});

var wanton = new MenuItem({title: "Wanton"});
var eggroll = new MenuItem({title: "Eggroll"});
var chowmein = new MenuItem({title: "Chowmein"});

var sushi = new MenuItem({title: "Sushi"});
var miso = new MenuItem({title: "Miso"});
var rice = new MenuItem({title: "Rice"});

var chocolate = new MenuItem({title: "Chocolate"});
var cinnamon = new MenuItem({title: "Cinnamon"});
var oatmeal = new MenuItem({title: "Oatmeal"});





var restaurants = [chinese,japanese,cookies];
var addresses = [address1, address2, address3];
var menuItems = [wanton, eggroll, chowmein, sushi, miso, rice, chocolate, cinnamon, oatmeal]

for (var i=0; i< restaurants.length; i++){
  restaurants[i].address.push(addresses[i])
  var j = i*3
  restaurants[i].items.push(menuItems[j], menuItems[j+1], menuItems[j+2])
  restaurants[i].save(function(err, restaurant){
    if(err){
      console.log(err);
    }else{
      console.log(restaurant)
    }
  })
};
