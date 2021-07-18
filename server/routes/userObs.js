const express = require('express')

const db = require('../db/usersObs')

const router = express.Router()

router.post('/', (req, res) => {
  const userSub = req.body.userSub
  db.getUserObsBySub(userSub)
    .then(results => {
      console.log('route hit', results)
      return res.json(results)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
