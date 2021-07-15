const express = require('express')
const path = require('path')
const request = require('superagent')
const birdsRoutes = require('./routes/birds')
require('dotenv').config()
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/birds', birdsRoutes)
server.get('/api/v1/ebirds/obs/recent', (req, res) => {
  request
    .get('https://api.ebird.org/v2/data/obs/NZ/recent/')
    .set('X-eBirdApiToken', process.env.REACT_APP_API_KEY)
    .set('Accept', 'application/json')
    .then(response => res.json(response.body))
    .catch(e => console.log(e))
})

module.exports = server
