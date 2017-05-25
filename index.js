var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var hbs        = require("express-handlebars");
var express    = require("express");
var parser = require("body-parser");

var app        = express();

var Restaurant = Schema.RestaurantModel;
var MenuItem = Schema.MenuItemModel;

app.set("port", process.env.PORT || 3001);

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use(parser.urlencoded({extended: true}))


//find a restaurant by name
function restaurantByName(restaurantName){
  Restaurant.findOne({name: restaurantName}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  })
}

//find all restaurants by zipcode
function restaurantByZipcode(restaurantZipcode){
  let restaurantList = []
  Restaurant.find({}, function(err, restaurants){
    restaurants.forEach(function(restaurant){
      if(restaurant.address.zipcode == restaurantZipcode){
        restaurantList.push(restaurant)
      }
    })
    console.log(restaurantList)
  })
}

// Updating resturant
function update(restaurant, update){
  Restaurant.findOneAndUpdate({name: resturant}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  });
}

// Deleting resturant
function destroy(restaurant){
  Restaurant.findOneAndRemove({name: resturant}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs + " was deleted!");
    }
  });
}


app.get("/", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("index", {restaurants})
  })
})

app.post("/", function(req, res){
  console.log(req.body)
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.redirect("/restaurants/" + restaurant._id);
  })
})

app.get("/restaurants/:id", function(req, res){
  Restaurant.findOne({_id: req.params.id}).then(function(restaurant){
    res.render("show", {restaurant})
  })
})

app.post("/restaurants/:id", function(req, res){
  console.log("hi")
  Restaurant.findOneAndUpdate({_id: req.params.id}, req.body.restaurant, {new: true}).then(function(restaurant){
    res.redirect("/restaurants/" + restaurant._id);
  });
});

app.post("/restaurants/:id/delete", function(req, res){
  Restaurant.findOneAndRemove({_id: req.params.id}).then(function(){
    res.redirect("/");
  });
});

app.post("/restaurants/:id/:item_id/delete", function(req, res){
  console.log(req.params)
  Restaurant.findOne({_id: req.params.id}).then(function(restaurant){
    for (let i = 0; i < restaurant.items.length; i++){
      if (restaurant.items[i]._id == req.params.item_id) {
        restaurant.items.splice(i, 1)
      }
    }
    restaurant.save((err, question) =>{
      if (err){
        console.log(err)
      } else {
        res.redirect("/restaurants/" + restaurant._id);
      }
    })
  })
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
