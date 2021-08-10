console.log('hello world');

const express = require('express')
const app = express()
const data = require('./data.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chords', (req, res) => {
  res.json(data)
})

app.get('/chords/:id', (req, res) => {
    const keyID = Number(req.params.id)
    const chord = data.find((item) => item.id === keyID);
    res.json(chord)
})

module.exports = app;