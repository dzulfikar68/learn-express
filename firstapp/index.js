var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send({
        title: "hello"
    })
})

app.get('/hello', function (req, res) {
    res.send("<h2>Hello World</h2>")
})

app.listen(3000)