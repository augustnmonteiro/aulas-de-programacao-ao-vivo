const http = require("http");
const url = require("url");
const PORT = 3000;

// DESAFIO PARA CASA
// Converter geração do ID em função
// No GET /todos adicionar a possibilidade de receber um parametro `id` e retornar somente esse todo
// No delete se não vier o parametro ID deve retornar um erro 400 (BAD REQUEST)

let todos = [
  {id: 1, title: "Fazer feira", description: "Laranjas, Arroz, Carne"},
];

// POST /todo

http.createServer((request, response) => {
  const reqUrl = url.parse(request.url, true);
  if (reqUrl.pathname == "/todo") {
    if (request.method == "GET") {
      // Adicionar a possibilidade de pegar somente 1 todo
      response.end(JSON.stringify(todos));
    } else if (request.method == "POST") {
      let data = "";
      request.on('data', (chunk) => {
        data += chunk;
      });
      request.on("end", () => {
        let task = JSON.parse(data);
        let lastTask = todos[todos.length - 1];
        let id = 1;
        if (lastTask) {
          id = lastTask.id + 1;
        }
        task.id = id;
        todos.push(task);
        response.end();
      });
    } else if (request.method == "DELETE") {
      let id = reqUrl.query.id;
      let newTodos = [];
      // PODE USAR O FILTER :rocks
      for (let i=0; i<todos.length; i++) {
        if (todos[i].id != id) {
          newTodos.push(todos[i]);
        }
      }
      todos = newTodos;
      response.end();
    } else {
      response.end();
    }
  } else {
    response.end();
  }
}).listen(PORT);