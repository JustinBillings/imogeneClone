var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var massive = require('massive')
// var db = massive.connectSync({db: 'PersonalProject'})
var connectionString = "postgres://postgres:@localhost/PersonalProject"

var app = module.exports = express()



var db = massive.connectSync({
  connectionString: connectionString
})

app.set('db', db);

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(express.static('public'))

var productsCtrl = require('./server/controllers/productsCtrl.js')

app.get('/api/products', productsCtrl.getAllDenimProducts)

var corsOptions = {
  origin: 'http://localhost:3838'
}

var port = 3838
app.listen(port, function() {
  console.log('this is ' + port + ' Special with Hold On Loosely')
})
