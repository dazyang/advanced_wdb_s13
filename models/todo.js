const mongoose = require('mongoose')
// Schema
// name
// completed
// createdDate

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cannot be blank!'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

// compile it to a model

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo