 
const express =require("express");

const app = express();

//Conexão com mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
})
app.get("/contato", function(req, res){
    res.send("Página de contato");
})
app.get("/blog", function(req, res){
    res.send("Página do blog");
})
//http://localhost:8080/

app.listen(8080);
