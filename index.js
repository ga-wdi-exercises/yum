var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;


Restaurant.create({ name: 'Blue Duck Tavern', "address.zipcode": 20037, yelp: "https://www.yelp.com/biz/blue-duck-tavern-washington" }, function (err, restaurant) {
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
  Restaurant.findOne({}, function(err, docs ){
    docs.forEach(function(rest){
        if(rest.address.zipcode === zipcode){
          results.push(rest);
        }
      });
      console.log(results);
    });
  }

function update(restaurant, update){
  Restaurant.findOneAndUpdate({name: restaurant}, {name: update}, {new: true}, function(err, docs){
    iff(err){
      console.log(err)
    }else{
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
