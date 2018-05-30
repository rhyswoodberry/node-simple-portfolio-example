const express = require('express')
const app = express()

// app.get('/', (req, res) => res.send('Bonjour Le Monde!'))
app.use('/', express.static('../client'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.post('/contact', (req, res) => {
  res.send('Submitted!')
})