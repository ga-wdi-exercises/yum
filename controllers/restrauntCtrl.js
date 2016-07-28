var Schema = require("../db/schema.js");
var Restraunt = Schema.Restraunt;
var Menu = Schema.Menu;

var restrauntCtrl = {
  index: function(){
    Restraunt.find({}, function(err, docs){
      console.log(docs);
    });
  }
},show: function(req){
  Restraunt.findOne({"title": req.name}, function(err, docs){
    console.log(docs);
  });
}
},removeProject: function(req, project){
  Restraunt.findOneAndUpdate(req, {
    $pull: { title:}
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
restrauntCtrl.index();
studentsController.show({title: "mikes"});
