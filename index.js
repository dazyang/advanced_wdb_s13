// This Index.js file is the main file where the server starts

// Express is node web development framework helps you to get server up and running super fast with nice clean syntax

// we are going to require our model directory, by default, when you require a directory it looks for index.js

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3000

const todoRoutes = require('./routes/todos') // this contains the exports of our todo route

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})) //these two lines are going to allow us to access the request body that comes in, whether it's a put request or post request
app.use(epxress.static(__dirname + '/public'))
app.use(epxress.static(__dirname + '/views'))


app.get('/', function(req, res){
  res.sendFile('index.html')
})

app.use('/api/todos', todoRoutes)

app.listen(port, function() {
  console.log("App is running on PORT " + port)
})


// body-parser takes in the body, which is a string and it's going to parse it and turned it into an object for us to use
