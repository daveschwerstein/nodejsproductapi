var mysql = require('mysql');

var connection = mysql.createPool({
  host        : 'localhost',
  port        : 8889,
  user        : 'root',
  password    : 'root',
  database    : 'david-angular-budget',
  socketPath  : '/Applications/MAMP/tmp/mysql/mysql.sock',
});

//connection.connect();
module.exports = connection;
