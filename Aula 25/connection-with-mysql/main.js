/**
 * Desafio:
 * - Escrever um script para conectar com o mysql
 * - Adicionar 10 categorias
 * - Adicionar 1000 todos
 * - A cada 100 todos deve se usar uma categoria diferente
 */

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "listra"
});

// for (let i=1; i<100; i++) {
//   connection.query(`INSERT INTO todo (title, description) VALUES ('TODO - ${i}', 'OI ${i}')`);
// }


connection.query('SELECT * FROM todo', (error, result, fields) => {
  console.log(result);
});