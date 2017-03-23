                                          // #################################
                                          // 201703232019L   EL MIERCOLES   JAY
                                          //Connecting with the schema
var Schema = require("../db/schema.js");

var Menuitem = Schema.Menuitem;
var Restaurant = Schema.Restaurant;

// First we clear the database of existing data.
Menuitem.remove({}, err => { if(err){ console.log(err) } });

Restaurant.remove({}, err => { if(err){ console.log(err) } });

var menuitem1 = new MenuItem({body: "asparagus!!"})
var menuitem2 = new MenuItem({body: "broccoli!!"})
var menuitem3 = new MenuItem({body: "cucumber!!"})
var menuitem4 = new MenuItem({body: "dinner!!"})
var menuitem5 = new MenuItem({body: "earofcorn!!"})
var menuitem6 = new MenuItem({body: "filo do!!"})

var arbys = new Restaurant({ name: "arbys", items: [menuitem1, menuitem2, menuitem3] })
var arbys = new Restaurant({ name: "charlie", items: [menuitem4, menuitem5, menuitem6] })
var arbys = new Restaurant({ name: "tom", items: [menuitem4, menuitem5, menuitem6] })


var restaurants = [arbys, charlie, tom]
// var menuitems = [menuitem1, menuitem2, menuitem3, menuitem4, menuitem5, menuitem6]

for(var i = 0; i < restaurants.length; i++){
  // restaurants[i].menuitems.push(menuitems[i], menuitems[i+3])

  restaurants[i].save(function(err){
    if (err){
      console.log("err:",err)
    }else {
      console.log("restaurant was saved")
    }
  })
}
