Create a new menu item for the restaurant.
Delete a menu item from the restaurant.
Complete steps in mongooseOnly.js


<form action="/restaurants/{{restaurant.name}}/items" method="post">
  <p><input type="text" name="item[title]" placeholder="new menu item" autocomplete="off"></p>
  <p><button type="submit">Add Menu Item</button></p>
</form>


app.post('/restaurants/:name/items', (req, res) => {
  Restaurant.findOne({name: req.params.name}, restaurant => {
    restaurant.items.push(req.body.item).then(restaurant => {
      restaurant.save(restaurant => {
        res.redirect('/restaurants')
      })
    })
  })
})
//
//   ).then(restaurant => {
//     restaurant.items.push(req.body.item).then(restaurant => {
//       restaurant.save().then(restaurant => {
//         res.redirect('/restaurants')
//       })
//     })
//   })
// })


app.post('/restaurants/:name/items/:title/delete', (req, res) => {
  Item.findOneAndRemove({title: req.params.title}, () => {
    res.redirect('/restaurants')
  })
})

// Restaurant.findOne({name: req.params.name}).then(restaurant => {
//   restaurant.items.push(req.body.item).then(restaurant => {
//     restaurant.save().then(restaurant => {
//       res.redirect('/restaurants/' + restaurant.name)
//     })
//   })
// })

<form action="/restaurants/{{restaurant.name}}/items/{{item.title}}/delete" method="post">
  {{item.title}}
  <button type="submit">Delete</button>
</form>
