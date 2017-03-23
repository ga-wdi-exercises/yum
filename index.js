const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const models = require('./db/models')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(parser.urlencoded({extended: true}))

app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname:        '.hbs',
  partialsDir:    'views/',
  layoutsDir:     'views/',
  defaultLayout:  'layout'
}))

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
  console.log('Express is watching your every move ...')
})

const Restaurant = models.Restaurant
const Item = models.Item

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  Restaurant.find({}).then(restaurants => {
    res.render('index', {restaurants})
  })
})

app.post('/restaurants', (req, res) => {
  Restaurant.create(req.body.restaurant).then(restaurant => {
    res.redirect('/restaurants/' + restaurant.name)
  })
})

app.get('/restaurants/:name', (req, res) => {
  Restaurant.findOne({name: req.params.name}).then(restaurant => {
    let items = restaurant.items
    res.render('show', {restaurant, items})
  })
})

app.post('/restaurants/:name', (req, res) => {
  Restaurant.findOneAndUpdate(
    {name: req.params.name},
    req.body.restaurant,
    {new: true}
  ).then(restaurant => {
    res.redirect('/restaurants/' + restaurant.name)
  })
})

app.post('/restaurants/:name/delete', (req, res) => {
  Restaurant.findOneAndRemove({name: req.params.name}).then(() => {
    res.redirect('/restaurants')
  })
})

app.post('/restaurants/:name/new-item', (req, res) => {
  Restaurant.findOneAndUpdate(
    {name: req.params.name},
    {$push: {items: req.body.item}}
  ).then(restaurant => {
    res.redirect('/restaurants/' + restaurant.name)
  })
})

app.post('/restaurants/:name/items/:title/delete', (req, res) => {
  Restaurant.findOneAndUpdate(
    {name: req.params.name},
    {$pull: {items: {title: req.params.title}}}
  ).then(restaurant => {
    res.redirect('/restaurants/' + restaurant.name)
  })
})
