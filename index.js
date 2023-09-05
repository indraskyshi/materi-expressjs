const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', function(req, res){
  const name = req.query.name

  res.send('Hello ' + name + '!')
})

app.get('/:address', function(req, res){
  const address = req.params.address
  const name = req.query.name

  res.send('Hello ' + name + '! Asal dari: ' + address)
})

app.post('/', function(req, res){
  const name = req.body.name
  const asal = req.body.asal

  res.send('Hello ini dari route POST! ' + 'Nama kamu: ' + name + ' Asal:' + asal)
})

app.listen(1945, function(){
  console.log('API started di http://localhost:1945')
})
