const express = require("express")
const Restaurant = require("./db/seeds.js").Restaurant
const Menu = require("./db/seeds.js").Menu
const hbs = require("hbs")
const parser = require("body-parser")

const app = express()
