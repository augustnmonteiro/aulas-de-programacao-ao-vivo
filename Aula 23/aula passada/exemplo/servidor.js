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
  if (!error){
    categories = JSON.parse(data);
  } else {
    console.error(error);
  }
})

fs.readFile(path.join("db", "todo.json"), options, (error, data) => {
  if (!error){
    categories = JSON.parse(data);
  } else {
    console.error(error);
  }
})

const writeTODOtoFile = () => {
  fs.writeFile(path.join("db", "todo.json"), JSON.stringify(todos), (err) => {
    if(err){
      console.error(err);
    }
  });
}

const writeCATEGORYtoFile = () => {
  fs.writeFile(path.join("db", "category.json"), JSON.stringify(categories), (err) => {
    if(err){
      console.error(err);
    }
  });
}

const { listTodos, addTodo, updateTodo, deleteTodo, setupCurrentIdTodos } = require("./todos-route");
const { listCategories, addCategory, updateCategory, deleteCategory, setupCurrentIdCategories } = require("./category-route");

setupCurrentIdTodos(todos);
setupCurrentIdCategories(categories);

function processRequest(request, response){

    const reqUrl = url.parse(request.url, true);
    if (reqUrl.pathname == "/todo"){
        switch(request.method) {
            case "GET":
              listTodos(request, response, reqUrl, todos, categories, writeTODOtoFile);
              break;
            case "POST":
              addTodo(request, response, reqUrl, todos, categories, writeTODOtoFile);
              break;
            case "PUT":
              updateTodo(request, response, reqUrl, todos, categories, writeTODOtoFile);
              break;
            case "DELETE":
              deleteTodo(request, response, reqUrl, todos, categories, writeTODOtoFile);
              break;
        }
    } else if (reqUrl.pathname == "/category"){
        switch(request.method) {
            case "GET":
              listCategories(request, response, reqUrl, todos, categories, writeCATEGORYtoFile);
              break;
            case "POST":
              addCategory(request, response, reqUrl, todos, categories, writeCATEGORYtoFile);
              break;
            case "PUT":
              updateCategory(request, response, reqUrl, todos, categories, writeCATEGORYtoFile);
              break;
            case "DELETE":
              deleteCategory(request, response, reqUrl, todos, categories, writeCATEGORYtoFile);
              break;
        }
    }
}
const server = http.createServer(processRequest);
server.listen(3000);