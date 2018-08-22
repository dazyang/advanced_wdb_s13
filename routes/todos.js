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
  res.send('This is post quest!')
})


module.exports = router