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
    res.render('index', {
      restaurants
    })
  })
})

app.get('/restaurants/:name', (req, res) => {
  Restaurant.find({name: req.params.name}).then(restaurant => {
    res.render('show', {
      restaurant
    })
  })
})
