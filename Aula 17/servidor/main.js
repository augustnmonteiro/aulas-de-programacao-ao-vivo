
const http = require("http");
const url = require("url");

http.createServer((request, response) => {
  const reqUrl = url.parse(request.url, true);
  console.log("Nova Request", reqUrl.pathname);
  response.setHeader('Content-Type', 'html');

  if (reqUrl.pathname == "/alunos") {
    response.end("<html><body><ul><li>Aluno 1</li><li>Aluno 2</li></ul></body></html>");
  } else if (reqUrl.pathname == "/curso") {
    response.end("<h1>Olá, como está o curso?</h1>")
  } else if (reqUrl.pathname == "/aulas") {
    console.log(reqUrl.query);
    if (reqUrl.query.senha == "123") {
      response.end("<h1>Bem vindo ao portal das aulas<h1>");
    } else {
      response.statusCode = 403;
      response.end();
    }
  } else {
    response.end();
  }
}).listen(3000);