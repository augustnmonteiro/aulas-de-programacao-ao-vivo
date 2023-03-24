const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Desafio
// Fazer todas as rotas do todo utilizando express

// FUTURO: Arquivos de ambiente development.env, production.env,...
// se quiser olhar o dotenv
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'listra'
});

app.get('/todo', (request, response) => {
  let query = "SELECT * FROM todo";
  if (request.query.showDeleted != "1") {
    query += ' WHERE deleted_at IS NULL';
  }
  connection.query(query, (error, result) => {
    if (error) {
      response.status(404).send();
    } else {
      response.send(result);
    }
  });
});

app.get('/todo/:id', (request, response) => {
  let query = `SELECT * FROM todo WHERE id=${request.params.id}`;
  if (request.query.showDeleted != "1") {
    query += ' AND deleted_at IS NULL';
  }
  connection.query(query, (error, result) => {
    if (error) {
      response.status(404).send();
    } else {
      response.send(result);
    }
  });
});

app.delete('/todo/:id', (request, response) => {
  response.send({'nome': 'Joao'});
});

app.put('/todo/:id', (request, response) => {
  response.send({'nome': 'Joao'});
});

app.post('/todo', (request, response) => {
  response.send({'nome': 'Joao'});
});


app.listen(port, () => {
  console.log("Servidor rodando!");
});