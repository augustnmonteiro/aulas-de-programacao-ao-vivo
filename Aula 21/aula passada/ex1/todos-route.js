
let todos = [
  {id: 1, title: "Fazer feira", description: "Laranjas, Arroz, Carne", categoryId: 1},
  {id: 1, title: "Fazer feira", description: "Laranjas, Arroz, Carne", categoryId: 1},
  {id: 1, title: "Fazer feira", description: "Laranjas, Arroz, Carne", categoryId: 1},
  {id: 1, title: "Fazer feira", description: "Laranjas, Arroz, Carne", categoryId: 2},
  {id: 1, title: "Fazer feira", description: "Laranjas, Arroz, Carne", categoryId: 1},
  //{id: 60,  },
 // {id: 30, }
];

let categories = [
  {id: 1, name: "Finanças"},
  {id: 2, name: "Pessoal"},
];

let currentId = 1;
for (let i=0; i<todos.length; i++){
    if (todos[i].id > currentId)
      currentId = todos[i].id;
}


function addID(task) {
  currentId = currentId + 1;
  task.id = currentId;
}

function addTimestemp(task) {
  task.createdAt = +new Date();
  task.updatedAt = +new Date();
}

function addTodo(request, response) {
  response.statusCode = 201;
  let data = "";
  request.on('data', (chunk) => {
      data += chunk;
  });
  request.on("end", () => {
    let task = JSON.parse(data);
    if (task.title && task.description) {
      addID(task);
      addTimestemp(task);
      todos.push(task);
      response.end();
    } else {
      response.statusCode = 400;
      response.end("BAD REQUEST");
    }
  }); 
} 

function findById(id) {
  for (let i=0; i<todos.length; i++) {
    if (todos[i].id == id) {
      return todos[i];
    }
  }
  return false;
}
function listTodos(request, response, url) {
  response.setHeader('Content-type','application/json');
  if (url.query.id) {
    let task = findById(url.query.id);
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

function deleteTodo(request, response, url) {
  if(url.query.id){
      for(let i=0; i<todos.length; i++){
          if(todos[i].id == url.query.id){
            todos[i].deletedAt = +new Date();
          }
      } 
      response.end();
  } else {
    response.statusCode = 400;
    response.end("BAD REQUEST");
  }
}

function updateTodo(request, response, url) {
  if(url.query.id){
    for(let i=0; i<todos.length; i++) {
      if(todos[i].id == url.query.id && !todos[i].deletedAt) {
        let data = "";
        request.on('data', (chunk) => {
            data += chunk;
        });
        request.on("end", () => {
            let task = JSON.parse(data);
            if (task.title && task.description) {
              task.id = todos[i].id;
              task.createdAt = todos[i].createdAt;
              task.updatedAt = +new Date();
              todos[i] = task;
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
  addTodo, listTodos, deleteTodo, updateTodo
}