let Schema = require("./schema");
let Restaurant = Schema.Restaurant
let MenuItem = Schema.MenuItem



let chicken = new MenuItem({title: "Chicken"})
let beef = new MenuItem({title: "Beef"})
let fish = new MenuItem({title: "Fish"})


let rural = new Restaurant({
  "name": "Rural Society",
  "address": {
    "street": "1177 15th St NW",
    "zipcode": "20005"
  },
  "items": [chicken, beef, fish],
  "yelpUrl": "https://www.yelp.com/biz/rural-society-washington"
})
