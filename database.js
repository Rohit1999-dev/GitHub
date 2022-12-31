var mysql = require('mysql');

config = {
  host: 'localhost',
  user: 'root',
  password: 'rohit22@#223',
  database: 'tododetails'
}

var connection =mysql.createConnection(config); 
connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.stack);
  }
  console.log('connected successfully to DB.');
});

module.exports = connection;
