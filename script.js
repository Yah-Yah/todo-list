/*
1. Create an array for todo items
2. Function to display todo
3. Function to add todo item
4. Function to change todo item
5. Function to delete todo item
*/
// Create an array for todo items
const todo = [];

// Function to display todo
function displayTodos() {
  console.log('My todo: ' + todo);
}

// Function to add todo item
function addTodo(newItem) {
  todo.push(newItem);
  displayTodos();
}

// Function to change todo item
function changeTodo(index, newValue) {
  todo[index] = newValue;
  displayTodos();
}

// Function to delete todo item
function deleteTodo(index) {
  todo.splice(index, 1);
  displayTodos();
}
