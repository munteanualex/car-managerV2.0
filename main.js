var express = require('express');
var app = express();
var path = require('path');
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.use('/', express.static(path.join(__dirname, 'views')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
