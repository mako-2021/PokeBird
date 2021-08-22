const express = require('express')

const db = require('../db/birds')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBirds()
    .then(results => {
      return res.json(results)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const { latName } = req.body
  db.getBirdImg(latName)
    .then(results => {
      return res.json(results)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Bird not in database' })
    })
})

module.exports = router
