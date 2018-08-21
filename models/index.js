// Express index.js will run this file which in turn will run todo.js (In short, Express will require todo model)

const mongoose = require('mongoose')
// allow us to see what's happening at any givent point when things are being sent to a database when they are failing
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/todo-api')

// this allows to use Promise syntax
mongoose.Promise = Promise 

module.exports.Todo = require('./todo')