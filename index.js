const express =require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Gerenciandor de estoque1");
})
app.get("/contato", function(req, res){
    res.send("Página de contato");
})
app.get("/blog", function(req, res){
    res.send("Página do blog");
})
//http://localhost:8080/

app.listen(8080);

