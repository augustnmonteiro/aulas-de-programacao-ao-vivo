const http = require("http");
const url = require("url");

http.createServer((req, resp) => {
    const reqUrl = url.parse(req.url, true);
    console.log("Nova Requisição", reqUrl.pathname);
    resp.setHeader('Content-Type', 'html');

    if(reqUrl.pathname == "/feed"){
        if(reqUrl.query.order == "asc"){
            resp.write("<html><body><ul><li>1</li><li>2</li><li>3</li></ul></body></html>");
            resp.end();
        } else if(reqUrl.query.order == "desc"){
            resp.write("<html><body><ul><li>3</li><li>2</li><li>1</li></ul></body></html>");
            resp.end();
        }else {
            resp.end("<h1>Bem Vindo ao Feed</h1>");    
        }
    }

    else if(reqUrl.pathname == "/home"){
        let nome = reqUrl.query.nome;
        if(nome == null){
            resp.end("<h1>Home</h1>");
        }else{
            resp.end("<h1>Bem vindo " + nome);
        }
    }

    else if(reqUrl.pathname == "/settings"){
        if(reqUrl.query.senha == "12345"){
            resp.end("<h1>Bem vindo as Configuracoes</h1>");
        } else {
            resp.statusCode = 403;
            resp.end();
        }
    } else {
        resp.end("<h1>Bem Vindo ao nosso Servidor</h1>");
    }

}).listen(8000);