const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST || 'localhost',
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || 'database',
});

connection.connect(function(err) {
  if (err) {
    console.error('Erro ao conectar com o banco de dados: ' + err.stack);
    return;
  }
  console.log('Conexão bem sucedida com o banco de dados');
});

module.exports = connection;