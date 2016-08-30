var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var restaurantsController = require("./controllers/restaurantsController")
mongoose.connect("mongodb://localhost/menuItems")

var app = express()
app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(express.static(__dirname + "/public"))

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/restaurants", restaurantsController.index)

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.create({ name: 'Cookies-R-Us', "address.zipcode": 20001 }, function (err, restaurant) {
  if (err) return handleError(err);
  console.log("We created", restaurant.name, 'in', restaurant.address.zipcode);
});

function findByName(restaurant){
  Restaurant.findOne({name: restaurant}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
}

function findByZip(zipcode){
  results = [];
  Restaurant.find({}, function(err, docs){
    docs.forEach(function(rest){
      if(rest.address.zipcode === zipcode){
        results.push(rest);
      }
    });
    console.log(results);
  });
}

function update(resturant, update){
  Restaurant.findOneAndUpdate({name: resturant}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  });
}

function destroy(resturant){
  Restaurant.findOneAndRemove({name: resturant}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs + " was deleted!");
    }
  });
}

function addItem(resturant, item){
  Restaurant.findOne({name: resturant}, function(err, docs){
    docs.items.push(new MenuItem({title: item}))
    docs.save(function(err, results){
      if(err){
        console.log(err)
      }
      else{
        console.log(results);
      }
    })
  });
}

function removeItem(resturant, item){
  Restaurant.findOneAndUpdate({name: resturant}, {
    $pull: { items: {title: item} }
  },
  {new: true}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
}
