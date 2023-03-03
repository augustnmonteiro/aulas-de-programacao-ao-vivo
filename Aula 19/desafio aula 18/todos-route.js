let todos = [
  {id: 1, title: "Fazer feira", description: "Laranjas, Arroz, Carne"},
  // {id: 52, title: "Fazer feira", description: "Laranjas, Arroz, Carne"},
  // {id: 60, title: "Fazer feira", description: "Laranjas, Arroz, Carne"},
  // {id: 28, title: "Fazer feira", description: "Laranjas, Arroz, Carne"},
];

// DESAFIO
// * Descobrir uma forma de sempre guardar o maior ID da lista
// Dentro da variavel currentID
// * No add todo e no updateTodo
// --- Checar se veio na request o `title` e o `description`, se não vier responder (response)
// Com um 400 (BAD REQUEST)

let currentID = 1;
if (todos.length > 0) {
  currentID = todos[todos.length - 1].id;
}

function addID(task) {
  currentID = currentID + 1;
  // ou
  // currentID++;
  task.id = currentID;
}

function addTimestamp(task) {
  //quando foi criado
  task.createdAt = +new Date();
}

//CRUD C=Create, R=Read, U=Update, D=Delete
function addTodo(request, response) {
  response.statusCode = 201;

  let data = "";
  request.on('data', (chunk) => {
    data += chunk;
  });
  request.on("end", () => {
    let task = JSON.parse(data);
    addID(task);
    addTimestamp(task);
    todos.push(task);
    response.end();
  });
}

function listTodos(request, response) {
  response.setHeader('Content-type', 'application/json');
  response.end(JSON.stringify(todos));
}

function deleteTodo(request, response, url) {
  if (url.query.id) {
    let newTodos = [];
    for (let i=0; i<todos.length; i++) {
      if (todos[i].id != url.query.id) {
        newTodos.push(todos[i]);
      }
    }
    todos = newTodos;
    response.end();
  } else {
    response.statusCode = 400;
    response.end("BAD REQUEST");
  }
}

function updateTodo(request, response, url) {
  if (url.query.id) {
    for (let i=0; i<todos.length; i++) {
      if (todos[i].id == url.query.id) {

        let data = "";
        request.on('data', (chunk) => {
          data += chunk;
        });
        request.on("end", () => {
          let task = JSON.parse(data);
          task.id = todos[i].id;
          task.createdAt = todos[i].createdAt;
          todos[i] = task;
          response.end();
        });

      }
    }
    response.end();
  } else {
    response.statusCode = 400;
    response.end("BAD REQUEST");
  }
}

module.exports = {
  addTodo, listTodos, deleteTodo, updateTodo
}