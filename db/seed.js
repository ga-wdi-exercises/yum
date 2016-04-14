var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant;
var Item =  Schema.Item;

Restaurant.remove({}, function(error){
  console.log(nope)
});
Item.remove({}, function(error){
  console.log(negatory)
});

restaurant1 = new Restaurant({ name: "Jimbo's Janky Joint", address: {"2121 21st Street", zipcode: "21212"}, yelp: "http://www.janksJ.com", items:[]})
restaurant2 = new Restaurant({ name: "Carols Crusty Bagel", address: {"3131 31st Street", zipcode: "31313"}, yelp: "http://www.CrustAteShuns.com", items:[]})
restaurant3 = new Restaurant({ name: "Farishta's Fishy Fondue", address: {"4141 41st Street", zipcode: "41414"}, yelp: "http://www.FrishesFishes.com", items:[]})
restaurant4 = new Restaurant({ name: "ViJays Viral Vittles", address: {"5151 51st Street", zipcode: "51515"}, yelp: "http://www.cdc.gov/DiseasesConditions/", items:[]})

var
