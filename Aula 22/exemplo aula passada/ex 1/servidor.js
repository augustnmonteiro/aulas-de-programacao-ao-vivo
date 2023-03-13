const http = require("http");
const url = require("url");

let todos = [
  {id: 1, title: "Fazer feira", description: "Laranjas, Arroz, Carne", categoryId: 1},
];

let categories = [
  {id: 1, name: "Finanças"},
];

const { listTodos, addTodo, updateTodo, deleteTodo, setupCurrentIdTodos } = require("./todos-route");
const { listCategories, addCategory, setupCurrentIdCategories } = require("./category-route");

setupCurrentIdTodos(todos);
setupCurrentIdCategories(categories);

function processRequest(request, response){

    const reqUrl = url.parse(request.url, true);
    if (reqUrl.pathname == "/todo"){
        switch(request.method) {
            case "GET":
              listTodos(request, response, reqUrl, todos, categories);
              break;
            case "POST":
              addTodo(request, response, reqUrl, todos, categories);
              break;
            case "PUT":
              updateTodo(request, response, reqUrl, todos, categories);
              break;
            case "DELETE":
              deleteTodo(request, response, reqUrl, todos, categories);
              break;
        }
    } else if (reqUrl.pathname == "/category"){
        switch(request.method) {
            case "GET":
              listCategories(request, response, reqUrl, todos, categories);
              break;
            case "POST":
              addCategory(request, response, reqUrl, todos, categories);
              break;
        }
    }
}
const server = http.createServer(processRequest);
server.listen(3000);