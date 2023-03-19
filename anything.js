var express = require('express')
var app  = express()

//respond with "Hello World" when a GET resquest is made to the homepage
app.get('/', function(req,res){
    res.send('Hello World')
})

//list to a particular spot
app.listen(3000)