const http = require("http");
const url = require("url");
const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");

/**
 * Desafio
 * - No POST do todo usar mysql
 * - No GET do category user mysql
 */

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "listra"
});

connection.query("SELECT 1", (error, result) => {
  if (error) {
    console.log("Error ao conectar com o banco de dados!", error);
  } else {
    console.log("Banco de dados conectado com sucesso!");
  }
});

const options = {
  encoding: "utf-8"
};

const { listTodos, addTodo, updateTodo, deleteTodo } = require("./routes/todos");
const { listCategories, addCategory, updateCategory, deleteCategory, setupCurrentIdCategories } = require("./routes/category");

let todos = [];
let categories = [];

fs.readFile(path.join("db", "category.json"), options, (error, data) => {
  if (!error){
    categories = JSON.parse(data);
    setupCurrentIdCategories(categories);
  } else {
    console.error(error);
  }
})

fs.readFile(path.join("db", "todo.json"), options, (error, data) => {
  if (!error){
    todos = JSON.parse(data);
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

function processRequest(request, response){

    const reqUrl = url.parse(request.url, true);
    if (reqUrl.pathname == "/todo"){
        switch(request.method) {
            case "GET":
              listTodos(request, response, reqUrl, connection);
              break;
            case "POST":
              //INSER INTO
              addTodo(request, response, reqUrl, connection);
              break;
            case "PUT":
              //UPDATE 
              updateTodo(request, response, reqUrl, connection);
              break;
            case "DELETE":
              deleteTodo(request, response, reqUrl, connection);
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