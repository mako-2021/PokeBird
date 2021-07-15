const express = require('express')

const db = require('../db/birds')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBirds()
    .then(results => {
      return res.json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
