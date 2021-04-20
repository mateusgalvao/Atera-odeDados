 
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
//https://www.youtube.com/watch?v=5JnPd_YckQw&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=7

app.listen(8080);