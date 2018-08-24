const express = require ('express')
// Express router allws us to brea our route out into little modular chunks. This will require back to the main index.js
const router = express.Router()

// require our model
const db = require('../models')

// Defining the index route

// when we refer to router.get /, in the main app it's actually going to be router.get/api/todos/:id (api/todos is prefixed in the main app) 
// GET /api/todos (List all todos)
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
// POST /api/todos (Create new todo
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

// GET  /api/todos/:todold (Retrieve a todo)
router.get('/:todoId', function(req, res){
  // param will be filled whatever the variables are //:define_something_as_a_path_variable
  db.Todo.findById(req.params.todoId)
  .then(function(foundTodo) {
    res.json(foundTodo)
  })
  .catch(function (err) {
    res.send(err)
  })
}) 


// PUT  /api/todos/:todold (Update a todo)
router.put('/:todoId', function(req, res){
  db.Todo.findOneAndUpdate({_id:req.params.todoId}, req.body, {new:true})
  .then(function(todo){
    res.json(todo)
  })
})

// DELETE  /api/todos/:todold (Delete a todo)
router.delete('/:todoId', function(req, res) {
  db.Todo.remove({_id: req.params.todoId})
  .then(function(){
    res.json({message: 'GONE!'})
  })
  .catch(function(err){
    res.send(err)
  })
})


module.exports = router




