const db = require('../models')

exports.index = (req, res) => {
  res.render('index')
}

exports.index = (req, res) => {
  db.Plant.findAll({}).then((dbPlant) => {
    res.render('index', {
      plant: dbPlant,
    })
  })
}
