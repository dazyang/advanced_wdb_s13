const express = require ('express')
// Express router allws us to brea our route out into little modular chunks. This will require back to the main index.js
const router = express.Router()

// require our model
const db = require('../models')

// when we refer to router.get /, in the main app it's actually going to be router.get/api/todos/:id (api/todos is prefixed in the main app)
router.get('/', function(req, res){
  db.Todo.find() 
  //find() is a method that Mongoose is going to go connect our database to find all todos
  .then(function(todos){
    res.json(todos) //then it's going to send json back 
  })
  .catch(function(err){
    res.send(err)
  })
}) 

router.post('/', function(req, res){
  //bodyparser is giving us the ability to now reference req.body
  db.Todo.create(req.body) 
  .then(function(newTodo){
    res.status(201).json(newTodo)
  }) 
  .catch(function(err){
    res.send(err)
  })
})


module.exports = router

// Defining the index route 
// GET /api/todos (List all todos)
// POST /api/todos (Create new todo)
// GET  /api/todos/:todold (Retrieve a todo)
// PUT  /api/todos/:todold (Update a todo)
// DELETE  /api/todos/:todold (Delete a todo)