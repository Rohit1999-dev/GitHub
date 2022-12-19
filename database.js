var mysql = require('mysql');

var db = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "password",
  database : "databasename"
});

db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + db.threadId);
    db.query(`SELECT * FROM userdetails where id = ${1}`,(err, res)=>{
        if(err){
            return console.log(err, `Query error!`);
        }else{
            console.log(res, `Resonse 200..!`);
        }
    })
    // console.log(userDetails, "User information !");
  });

module.exports = db;