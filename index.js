var mongoose = require('mongoose');
var Schema = require("./db/schema.js");


var Rest = Schema.RestModel
var Item = Schema.ItemModel

function findByName(rest){
  Rest.findOne({name: rest}, function(err, res){
    if(err){
      console.log(err)
    }else {
      console.log(res)
    }
  })
}

function findByZip(zip){
  var rests = []
  Rest.find({}, function(err, docs){
    docs.forEach(function(rest){
      if(rest.address.zipcode == zip){
        rests.push(rest)
      }else {

      }
    })
    console.log(rests)
  })
}

function updateRest(rest, update){
  Rest.findOneAndUpdate({name: rest}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }else {
      console.log(docs)
    }
  })
}

function deleteRest(rest){
  Rest.findOneAndRemove({name: rest}, function(err, docs){
    if(err){
      console.log(err)
    }else{
      console.log(docs + "has been deleted")
    }
  })
}

function addItemToRest(rest, item){
  Rest.findOne({name: rest}, function(err, docs){
    newItem = new Item({title: item})
    docs.items.push(newItem)
    docs.save(function(err, res){
      if(err){
        console.log(err)
      }else{
        console.log(res)
      }
    })
  })
}

function removeItemFromRest(rest, item){
  Rest.findOneAndUpdate({name: resturant}, {
    $pull: {
      items: {
        title: item
      }
    }
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
