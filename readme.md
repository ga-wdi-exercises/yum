# YUM!

For Homework you will be writing a simple node application to practice using `mongoose.js` and `mongo`.

We will be creating an App that tracks and stores Restaurants and Menu Items

## Setup:

Fork and Clone Repo

```bash
npm install
```

## Instructions:

1. Create Schemas and Corresponding Models for A Restaurant and for Menu Items

2. Adds Seeds Data for the Restaurant and Menu Items:

  - A Restaurant should have the following attributes:

    * name (a string)
    * address (an object with a street(string) and zipcode property(number))
    * yelp url (a string)
    * items (array containing your items schema)

  - A Menu Item should contain the following:

    * title (a string)

3. Create a new Restaurant

4. Write a function or method that finds a Restaurant by name

5. Write a function or method that finds all Restaurants by ZipCode

6. Create a function that updates a Restaurant  

7. Write a function or method that deletes a restaurant

8. Write Methods to add and remove embedded menu item documents for a Restaurant of your choosing.

## Monitor your changes and test:

```
nodemon index.js
```
