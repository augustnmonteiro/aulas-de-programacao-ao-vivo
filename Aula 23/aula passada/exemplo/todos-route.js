let currentId = 0;

function setupCurrentIdTodos(todos) {
  for (let i=0; i<todos.length; i++){
      if (todos[i].id > currentId)
        currentId = todos[i].id;
  }
}

function addID(task) {
  currentId = currentId + 1;
  task.id = currentId;
}

function addTimestemp(task) {
  task.createdAt = +new Date();
  task.updatedAt = +new Date();
}

function addTodo(request, response, url, todos, categories, writeTODOtoFile) {
  response.statusCode = 201;
  let data = "";
  request.on('data', (chunk) => {
      data += chunk;
  });
  request.on("end", () => {
    let task = JSON.parse(data);
    if (task.title && task.description && task.categoryId) {
      addID(task);
      addTimestemp(task);
      todos.push(task);
      writeTODOtoFile();
      response.end();
    } else {
      response.statusCode = 400;
      response.end("BAD REQUEST");
    }
  }); 
} 

function findById(id, todos) {
  for (let i=0; i<todos.length; i++) {
    if (todos[i].id == id) {
      return todos[i];
    }
  }
  return false;
}
function listTodos(request, response, url, todos, categories) {
  response.setHeader('Content-type','application/json');
  if (url.query.id) {
    let task = findById(url.query.id, todos);
    if (task && (!task.deletedAt || url.query.showDeleted == "true")) {
      response.end(JSON.stringify(task));
    } else {
      response.statusCode = 404;
      response.end("NOT FOUND");
    }
  } else {
    let newTodos = [];
    for (let i=0; i<todos.length; i++) {
      if (!todos[i].deletedAt || url.query.showDeleted == "true") {
        newTodos.push(todos[i]);
      }
    }
    response.end(JSON.stringify(newTodos));
  }
}

function deleteTodo(request, response, url, todos, categories, writeTODOtoFile) {
  if(url.query.id){
      for(let i=0; i<todos.length; i++){
          if(todos[i].id == url.query.id){
            todos[i].deletedAt = +new Date();
            writeTODOtoFile()
          }
      } 
      response.end();
  } else {
    response.statusCode = 400;
    response.end("BAD REQUEST");
  }
}

function updateTodo(request, response, url, todos, categories, writeTODOtoFile) {
  if(url.query.id){
    for(let i=0; i<todos.length; i++) {
      if(todos[i].id == url.query.id && !todos[i].deletedAt) {
        let data = "";
        request.on('data', (chunk) => {
            data += chunk;
        });
        request.on("end", () => {
            let task = JSON.parse(data);
            if (task.title && task.description && task.categoryId) {
              task.id = todos[i].id;
              task.createdAt = todos[i].createdAt;
              task.updatedAt = +new Date();
              todos[i] = task;
              writeTODOtoFile();
              response.end();
            } else {
              response.statusCode = 400;
              response.end("BAD REQUEST");
            }
        });
        return;
      }
    }
    response.statusCode = 404;
    response.end("NOT FOUND");
  } else {
    response.statusCode = 400;
    response.end("BAD REQUEST");
  }
}

module.exports = {
  addTodo, listTodos, deleteTodo, updateTodo, setupCurrentIdTodos
}