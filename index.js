// This Index.js file is the main file where the server starts

// Express is node web development framework helps you to get server up and running super fast with nice clean syntax

// we are going to require our model directory, by default, when you require a directory it looks for index.js

const express = require('express')
      app = express()

const port = process.env.PORT || 3000

const todoRoutes = require('./routes/todos') // this contains the exports of our todo route

app.get('/', function(req,res){
  res.send('Hello, this message is from the root route.')
})

app.use('/api/todos', todoRoutes)

app.listen(port, function() {
  console.log("App is running on PORT " + port)
})

// Defining the index route 
// GET /api/todos (List all todos)
// POST /api/todos (Create new todo)
// GET  /api/todos/:todold (Retrieve a todo)
// PUT  /api/todos/:todold (Update a todo)
// DELETE  /api/todos/:todold (Delete a todo)

