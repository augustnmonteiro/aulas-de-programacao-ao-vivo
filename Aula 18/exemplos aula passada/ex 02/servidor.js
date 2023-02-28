const http = require("http");
const url = require("url");

/*
 TODO: 
    [x] /feed está carregando sem parar (não está enviando a response)
    [] /home não está mostrando o parametro nome
*/

http.createServer((request, response) => {
  const reqUrl = url.parse(request.url, true);
  console.log("Nova Request", reqUrl.pathname);
  response.setHeader('Content-Type', 'html');
  if (reqUrl.pathname == "/feed") {
    if(reqUrl.query.order == "asc"){
      response.end("<h1><li>Usuario 1</li><li>Usuario 2</li><li>Usuario 3</li<h1>");
    } else if(reqUrl.query.order == "desc"){
      response.end("<html><body><ul><li>Usuario 3</li><li>Usuario 2</li><li>Usuario 1</li></ul></body></html>");
    } else {
      response.end();
    }
  } else if (reqUrl.pathname == "/home") {
    let name = reqUrl.query.nome;
    if (name) { // name == true && name != 0 && name != "" && name != undefined && name != null
      response.end("<h1><li>Oi, " + name + ". tudo bem?</li><li>Seja bem vindo</li></h1>")
    } else {
      response.end("<h1><li>Oi</li><li>Seja bem vindo</li></h1>")
    }
  } else if (reqUrl.pathname == "/settings") {
    console.log(reqUrl.query);
    if (reqUrl.query.senha == "1234") {
      response.end("<h1>Bem vindo(a)<h1>");
    } else {
      response.statusCode = 403;
      response.end();
    }
  } else {
    response.end();
  }
}).listen(8000);