const express = require ('express')
// Express router allws us to brea our route out into little modular chunks. This will require back to the main index.js
const router = express.Router()

// require helper functions
const helper = require('../helpers/todo')
// Defining the index route
router.route('/')
  .get(helper.getTodos) // GET /api/todos (List all todos)
  .post(helper.createTodos) // POST /api/todos (Create new todo

router.route('/:todoId')  
  .get(helper.getTodo) // GET  /api/todos/:todold (Retrieve a todo)
  .put(helper.updateTodo) // PUT  /api/todos/:todold (Update a todo)
  .delete(helper.deleteTodo) // DELETE  /api/todos/:todold (Delete a todo)

module.exports = router




