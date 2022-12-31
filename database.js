var mysql = require('mysql');

config = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'databasename'
}

var connection =mysql.createConnection(config); 
connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.stack);
  }
  console.log('connected successfully to DB.');
});

module.exports = connection;
