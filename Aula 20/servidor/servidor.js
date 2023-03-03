const http = require("http");
const url = require("url");

/**
 * Desafio
 * Quando o usuario deletar algum TODO, não remover o TODO do Array. (Deletar de forma lógica)
 * *** Lembrar da função de editar, o usuario não deve conseguir editar um TODO que já foi deletado
 */

const { listTodos, addTodo, updateTodo, deleteTodo } = require("./todos-route");

function processRequest(request, response){

    const reqUrl = url.parse(request.url, true);
    if (reqUrl.pathname == "/todo"){
        switch(request.method){
            case "GET":
              listTodos(request, response, reqUrl);
              break;
            case "POST":
              addTodo(request, response, reqUrl);
              break;
            case "PUT":
              updateTodo(request, response, reqUrl);
              break;
            case "DELETE":
              deleteTodo(request, response, reqUrl);
              break;
        }
    }
}
const server = http.createServer(processRequest);
server.listen(3000);