const express = require('express')

const db = require('../db/usersObs')

const router = express.Router()

router.post('/', (req, res) => {
  const userSub = req.body.userSub
  db.getUserObsBySub(userSub)
    .then(results => {
      return res.json(results)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/add', (req, res) => {
  const observation = req.body.observation
  db.addUserObs(observation)
    .then(results => {
      return res.json(results)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/del', (req, res) => {
  const id = req.body.id
  db.delUserObs(id)
    .then(results => {
      return res.json(results)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
