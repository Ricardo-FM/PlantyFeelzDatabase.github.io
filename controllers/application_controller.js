const db = require('../models')

exports.index = (req, res) => {
  db.Plant.findAll({}).then((dbPlant) => {
    res.render('index', {
      layout: 'main-plants',
      plant: dbPlant,
    })
  })
}
