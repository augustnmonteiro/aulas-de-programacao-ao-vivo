/**
 * Desafio:
 * -> Na função de adicionar todo, não permitir todo sem categoryId
 * -> Na função de editar todo, não permitir remover categoryId (**Usuario pode mudar a categoria mas não pode remover)
 * -> Implementar endpoint de DELETE para categorias
 * -> Implementar endpoint de PUT para categorias
 * -> No PUT e DELETE do TODO colocar para salvar no arquivo
 * -> Implementar função para salvar aquivo das categorias
 * -> Salvar categorias no arquivo sempre que uma nova categoria for adicionada ou deletada 
 */

const http = require("http");
const url = require("url");

const fs = require("fs");
const path = require("path");

const options = {
  encoding: "utf-8"
};

let todos = [];
let categories = [];

fs.readFile(path.join("db", "category.json"), options, (error, data) => {
  if (!error) {
    categories = JSON.parse(data);
  } else {
    console.error(error);
  }
});

fs.readFile(path.join("db", "todo.json"), options, (error, data) => {
  if (!error) {
    todos = JSON.parse(data);
  } else {
    console.error(error);
  }
});

const writeTODOToFile = () => {
  fs.writeFile(path.join("db", "todo.json"), JSON.stringify(todos), (err) => {
    if (err) {
      console.error(err);
    }
  });
}

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
              addTodo(request, response, reqUrl, todos, categories, writeTODOToFile);
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