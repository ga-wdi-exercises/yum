var Schema = require('../db/schema.js')
const Menu = Schema.Menu

var menusController = {
  index() {
    Menu.find({}, (err, menu) => {
    console.log(menus);
    })
  },
  show(req) {
    Menu.findOne({title: req.name}, (err, menu) => {
      console.log(menu);
    })
  },
  edit(req) {
    Menu.findOneAndUpdate({name: req.params.name}, req.body.menu,{new: true}).then(function(menu){
      console.log(menu);
    })
  },
  delete(req) {
    Menu.findOneAndRemove({name: req.params.name}, req.body.menu,{new: true}).then(function(menu){
      console.log(menu);
    })
  },
};
