const http = require("http");
const url = require("url");
const mysql = require("mysql2");

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

const { listTodos, addTodo, updateTodo, deleteTodo } = require("./routes/todos");
const { listCategories, addCategory, updateCategory, deleteCategory } = require("./routes/category");

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
              listCategories(request, response, reqUrl, connection);
              break;
            case "POST":
              addCategory(request, response, reqUrl, connection);
              break;
            case "PUT":
              updateCategory(request, response, reqUrl, connection);
              break;
            case "DELETE":
              deleteCategory(request, response, reqUrl, connection);
              break;
        }
    }
}
const server = http.createServer(processRequest);
server.listen(3000);