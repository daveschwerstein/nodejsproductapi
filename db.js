var mysql = require('mysql');

var connection = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'david-angular-budget'
});

//connection.connect();
module.exports = connection;