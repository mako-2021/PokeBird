const express = require('express')
const path = require('path')
const request = require('superagent')
const fruitRoutes = require('./routes/fruits')
require('dotenv').config()
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)


server.get('/api/v1/ebirds/obs/recent', (req, res) => {
    request
        .get(`https://api.ebird.org/v2/data/obs/NZ/recent/`)
        .set('X-eBirdApiToken', process.env.REACT_APP_API_KEY)
        .set('Accept', 'application/json')
        .then(response => res.json(response.body))
        .catch(e => console.log(e))
})

module.exports = server


