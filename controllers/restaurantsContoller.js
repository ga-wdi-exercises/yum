const Restaurant = require('../db/models.js').Restaurant
const MenuItem = require('../db/models.js').MenuItem

var resaurantsController = {
    index: function() {
        Restaurant.find({}, function(err, docs) {
            console.log(docs);
            return docs;
        });
    },
    show: function(req) {
        Restaurant.findOne({
            "name": req.name
        }, function(err, docs) {
            console.log(docs);
            return docs;
        });
    },
    new: function(req) {
        Restaurant.create({
            name: req.name,
            address: {
                street: req.street,
                zipcode: req.zipcode
            },
            yelpUrl: reqUrl
        })
    },
    showByZip: function(req){
      Restaurant.find({"address.zipcode": req.zipcode}, function(err, docs){
      console.log(docs);
      })
    },
    update: function(req, update) {
        Restaurant.findOneAndUpdate({name:req.name}, {name: update.name}, {new: true}, function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                console.log(docs);
            }
        });
    },
    destory: function(req) {
        Restaurant.findOneAndRemove(req, function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                console.log(docs);
            }
        });
    }
