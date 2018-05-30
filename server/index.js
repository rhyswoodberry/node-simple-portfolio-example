const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/contact_form')

const Enquiry = mongoose.model('Enquiry', {
  name: String,
  email: String,
  phone: String,
  message: String
})

// app.get('/', (req, res) => res.send('Bonjour Le Monde!'))
app.use('/', express.static('../client'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.post('/contact', (req, res) => {
  // res.send(`Submitted! 
  // <br>
  // Name: ${req.body.name}<br>
  // Email: ${req.body.email}<br>
  // Email: ${req.body.email}<br>
  // Message: ${req.body.message}<br>`)

  const enquiry = new Enquiry({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  })
})
