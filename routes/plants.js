var express = require('express')
var router = express.Router()

var plants = require('../controllers/plants_controller')
var isAuthenticated = require('../config/middleware/isAuthenticated')

router.get('/', isAuthenticated, plants.index)

router.post('/new', isAuthenticated, plants.createPlant)

module.exports = router
