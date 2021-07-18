const express = require('express')

const db = require('../db/birds')

const router = express.Router()

// I'm just a route, standing in front of a coder, asking them to test me
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

module.exports = router
