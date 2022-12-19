const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var mysql = require('mysql');
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;


app.get('/', (req, res) => {
    res.send(`Hello, I am express js..`);
});

app.listen(port, ()=>{
    console.log(`server running on ${port} !`);
});