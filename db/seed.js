var Schema = require("./schema.js")

var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

Restaurant.remove({}, err => {
  if (err){
    console.log(err)
  }
})

Menu.remove({}, err => {
  if (err) {
    console.log(err)
  }
})


  nats= new Restaurant({ name: "Nat's", address: { street: "123 Street", zipcode: 22221, }, yelp: "www.nats.com"})
  savrajs= new Restaurant({ name: "savraj's", address: { street: "124 Street", zipcode: 22222, }, yelp: "www.savs.com"})
  erics= new Restaurant({ name: "eric's", address: { street: "125 Street", zipcode: 22232, }, yelp: "www.erics.com"})




  var menu1 = new Menu({title: "pizza"})
  var menu2 = new Menu({title: "chipotle"})
  var menu3 = new Menu({title: "chinese"})


  var menuItems = [menu1, menu2, menu3]
  var resturants = [nats, savrajs, erics]

  resturants.forEach(function(resturant, i){
    resturant.items.push(menu[i], menu[i+3]);
    resturant.save(function(err, docs){
      if(err){
        console.log(err)
      }
      else{
        console.log(docs)
      }
    })
  })
