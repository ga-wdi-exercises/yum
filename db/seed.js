var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;


res1 = new Restaurant({
  name: "Masa Luna",
  address: {
    street: "209 E Holly Ave",
    zipcode: 20164
  },
  yelpUrl: "https://www.yelp.com/biz/masa-luna-sterling"
});

menu1 = new MenuItem({title: "Pollo Guisado"});

res2 = new Restaurant({
  name: "The Pollo Factory",
  address: {
    street: "156 J Enterprise St",
    zipcode: 20164
  },
  yelpUrl: "https://www.yelp.com/biz/the-pollo-factory-sterling"
});

menu2 = new MenuItem({title: "Aji de Gallina"});
