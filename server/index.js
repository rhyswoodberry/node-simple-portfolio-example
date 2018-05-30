const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', (req, res) => res.send('Bonjour Le Monde!'))
app.use('/', express.static('../client'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.post('/contact', (req, res) => {
  res.send(`Submitted! 
  <br>
  Name: ${req.body.name}<br>
  Email: ${req.body.email}<br>
  Email: ${req.body.email}<br>
  Message: ${req.body.message}<br>`)
})