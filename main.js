<<<<<<< HEAD
var express = require('express');
var app = express();
var path = require('path');
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.use('/', express.static(path.join(__dirname, 'views')))
=======
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/test', require('./routes/test'))
>>>>>>> 69e06d6073639ea07e46c49348861fcffc57def0

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
