//when the page loads select the html document
$(document).ready(function(){
  $.getJSON("/api/todos")
  .then(addTodos)

  $('#todoInput').keypress(function(event){
    if (event.which == 13) {
      createTodo()
    }
  })
  //The document is listening for clicks on something that exists on the page at the beginning, within that we are looking for 'span'
  $('.list').on('click', 'span', function(){
     removeTodo($(this).parent())
  })
})

function addTodos(todos){
  todos.forEach(function(todo){
   addTodo(todo)
  })
}

function addTodo(todo){
  const newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>")
  // jQuery's .data method stores little pieces of data, in this case the id
  newTodo.data('id', todo._id)
  if (todo.completed) { newTodo.addClass('done') }
  $('.list').append(newTodo)
}

function createTodo(newTodo){
  // send request to create to-do
  const userInput = $('#todoInput').val()
  $.post('api/todos', {name: userInput})
  .then(function(newTodo){
    $('#todoInput').val('')
    addTodo(newTodo)
  })
  .catch(function(err){
    console.log(err)
  })
}

function removeTodo(todo){
  const clickedId = todo.data('id')
  const deleteUrl = 'api/todos/' + clickedId
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
    .then(function (data) {
      todo.remove()
    })
    .catch(function(err){
      console.log(err)
    })
}