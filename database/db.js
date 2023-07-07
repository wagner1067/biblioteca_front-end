const mysql = require('mysql2/promise');

const connection = mysql.createPool("mysql://root:api123@localhost:3306/localdb");
  
module.exports = connection