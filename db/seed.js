var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant;
var Item =  Schema.Item;

Restaurant.remove({}, function(error){
  console.log("nope")
});
Item.remove({}, function(error){
  console.log("negatory")
});

restaurant1 = new Restaurant({ name: "Jimbo's Janky Joint", address: {"2121 21st Street", zipcode: "21212"}, yelp: "http://www.janksJ.com", items:[]})
restaurant2 = new Restaurant({ name: "Carols Crusty Bagel", address: {"3131 31st Street", zipcode: "31313"}, yelp: "http://www.CrustAteShuns.com", items:[]})
restaurant3 = new Restaurant({ name: "Farishta's Fishy Fondue", address: {"4141 41st Street", zipcode: "41414"}, yelp: "http://www.FrishesFishes.com", items:[]})
restaurant4 = new Restaurant({ name: "ViJays Viral Vittles", address: {"5151 51st Street", zipcode: "51515"}, yelp: "http://www.cdc.gov/DiseasesConditions/", items:[]})

var item1 = new Item({title: "dollar-sauce"})
var item2 = new Item({title: "Old Sheet Souflee"})
var item3 = new Item({title: "Boogie-Burgie"})
var item4 = new Item({title: "Oil Soup"})
var item5 = new Item({title: "Fur Salad with Shaving Cream n' Onions"})
var item6 = new Item({title: "Saliva Sandwhich"})

var specialties = [item1,item2,item3,item4,item5,item6]
var restaurants = [restaurant1,restaurant2,restaurant3,restaurant4]

restaurants.forEach(function(restaurant, i){
  restaurant.items.push(specialties[i], specialties[i+3])
  restaurant.save(function(error,docs){
    if(error){
      console.log("no save grandmaw");
    }
    else{
      console.log(docs)
    }
  })
})
