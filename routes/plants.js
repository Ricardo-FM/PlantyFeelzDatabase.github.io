var express = require('express')
var router = express.Router()

var plants = require('../controllers/plants_controller')
var isAuthenticated = require('../config/middleware/isAuthenticated')

router.get('/', isAuthenticated, plants.index)

router.post('/new', isAuthenticated, plants.createPlant)

// router.post('/update', isAuthenticated, plants.updatePlant)

// router.post('/delete', isAuthenticated, plants.deletePlant)

module.exports = router
