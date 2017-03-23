// 3. Create a new restaurant.
Restaurant.create({
  name: 'Burger Joint',
  address: {
    street: '789 Fictional Street',
    zipcode: 20016
  },
  yelpUrl: 'https://www.yelp.com/third-fake-url',
  items: [
    {title: 'Burger 1'},
    {title: 'Burger 2'}
  ]
})

// 4. Write a function or method that finds a restaurant by `name`.
function findRestaurantByName(name) {
  return Restaurant.findOne({name})
}

// 5. Write a function or method that finds all restaurants by `zipCode`.
function findRestaurantsByZipcode(zipcode) {
  return Restaurant.find({zipcode})
}

// 6. Create a function that updates a restaurant.
function updateRestaurant(name, objectLiteral) {
  Restaurant.findOneAndUpdate(
    {name},
    objectLiteral
  )
}

// 7. Write a function or method that deletes a restaurant.
function deleteRestaurant(name) {
  Restaurant.findOneAndRemove({name})
}

// 8. Write methods to add and remove embedded menu item documents for a restaurant of your choosing.
