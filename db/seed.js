var schema = require("../db/schema");
var Pizza = schema.pizza
Pizza.remove({}, function(err){
  console.log(err)
})

pizza1 = new Pizza({title: "Cheese", size: "L"})

pizza1.save();
