const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var db = require('./database');

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;


app.get('/findUserDetails/:id',function(req, res){
    var id = req.params.id;
    db.query(`select * from userdetails where id = ${id}`, function(err, result){
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    })
});

app.get('/findUserDetails',function(req, res){

    db.query(`select * from userdetails`, function(err, result){
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    })
});

app.post('/appendUserDetails',function(req, res){
    var id = req.body.id;
    var username = req.body.username;
    var useremail = req.body.useremail;
    var userpassword = req.body.userpassword;
    db.query(`call insert_userinfo(?,?,?,?)`, [id, username, useremail, userpassword], function (err, result){
        if (err) {
            console.log("err:", err);
        } else {
            res.send({'result': 'Inserted one row sucessfully!'})
            console.log("results:", result);
        }
    })
});


app.listen(port, ()=>{
    console.log(`server running on ${port} !`);
});