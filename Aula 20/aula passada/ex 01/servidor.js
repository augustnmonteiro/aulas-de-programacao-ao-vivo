const http = require("http");
const url= require ("url");
const listTodos= require("./todos-route").listTodos;
const addTodo= require("./todos-route").addTodo;
const deleteTodo= require("./todos-route").deleteTodo;
const updateTodo= require("./todos-route").updateTodo;

// REQUEST: o servidor RECEBE a pergunta.
// RESPONSE: o servidor RESPONDE a pergunta.

function processRequest(request, response) {
    const reqUrl = url.parse(request.url,true);

    if(reqUrl.pathname== "/todo") {
        switch(request.method){
            case"GET":
                listTodos(request,response,reqUrl);
            break;
            case"POST":
                addTodo(request,response,reqUrl);
            break;
            case"PUT":
                updateTodo(request,response,reqUrl);
            break;
            case"DELETE":
                deleteTodo(request,response,reqUrl);
            break;
        }
    }
}
const server = http.createServer(processRequest);
server.listen(3000);
