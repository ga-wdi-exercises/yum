var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

MenuItem.remove({}, err => {
  if(err){
    console.log(err)
  }
});


var kazan = new Restaurant({
  name: "Kazan",
  address: {
    street: "6813 Redmond Dr",
    zipcode: 22101
  },
  yelp: "https://www.yelp.com/biz/kazan-restaurant-mclean",
  items: []
})


var bozellis = new Restaurant({
  name: "Bozelli's",
  address: {
    street: "1025 Vermont Ave NW",
    zipcode: 20005
  },
  yelp: "https://www.yelp.com/biz/bozzellis-washington"
})

var vapiano = new Restaurant({
  name: "Vapiano",
  address: {
    street: "1800 M St NW",
    zipcode: 20036
  },
  yelp: "https://www.yelp.com/biz/vapiano-washington-2"
})

  var item1 = new MenuItem({title: "Kebab"})
  var item2 = new MenuItem({title: "Steak and Cheese"})
  var item3 = new MenuItem({title: "Chocolate Cake"})
  var item4 = new MenuItem({title: "Pepperoni Pizza"})
  var item5 = new MenuItem({title: "Penne Arrabiata"})
  var item6 = new MenuItem({title: "Green Salad"})

var menuItems = [item1, item2, item3, item4, item5, item6]
var restaurants= [kazan, bozellis, vapiano]

restaurants.forEach((restaurant, i) => {
  restaurant.items.push(menuItems[i], menuItems[i+3])
  restaurant.save(function(err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      console.log(docs);
    }
  })
})

// kazan.save()
// bozellis.save()
// process.exit()
