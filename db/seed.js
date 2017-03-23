// var Schema = require('../db/schema.js')

const Restaurant = require("./schema.js").Restaurant
const Menu = require("./schema.js").Menu


Restaurant.remove({}).then(() => {
  if (err) {
    console.log(err);
  process.exit()
  });
}

Menu.remove({}).then(() => {
  if (err)
  console.log(err);
  process.exit()
});

let GiordanosMenu = new Menu({title: "Pizza"});
// Giordanos.items.push(GiordanosMenu);
// Giordanos.save();

let KoreanBBQMenu = new Menu({title: "BBQ"});
// Hobak_Korean_BBQ.items.push(KoreanBBQMenu)
// Hobak_Korean_BBQ.save();

let Pho90Menu = new Menu({title: "Pho"});
// Pho_90.items.push(Pho90Menu);
// Pho_90.save();

var Giordanos = new Restaurant({
  name: "Giordanos Pizza",
  address:
  {
    street: "3919 Las Vegas Blvd S",
    zipcode: 89109
  },
  yelpUrl: "https://www.yelp.com/biz/giordanos-las-vegas-2?osq=Micheals+Pizza",
  // items: [MenuSchema]
});

var Hobak_Korean_BBQ = new Restaurant({
  name: "Hobak Korean BBQ",
  address:
  {
    street: "5808 Spring Mountain Rd",
    zipcode: 89146
  },
  yelpUrl: "https://www.yelp.com/biz/hobak-korean-bbq-las-vegas",
  // items: [MenuSchema]
});

var Pho_90 = new Restaurant({
  name: "Pho 90",
  address:
  {
    street: "4355 W Spring Mountain Rd",
    zipcode: 89102
  },
  yelpUrl: "https://www.yelp.com/biz/pho-90-las-vegas-2",
  // items: [MenuSchema]
});

var restaurants = [Giordanos, Hobak_Korean_BBQ, Pho_90]
var menu = [GiordanosMenu, KoreanBBQMenu, Pho90Menu]

for(var i=0; i<restaurants.length; i++){
  restaurants[i].items.push(menu[i], menu[i+1]);
  restaurants[i].save((err,restaurant) => {
    if (err) {
      console.log(err);
    } else {
      console.log(restaurant);
    }
  })
}
