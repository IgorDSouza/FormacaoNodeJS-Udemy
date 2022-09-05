// usaremos ESJ(EMBEDDED JAVASCRIPT TEMPLATING) para renderizar html através das rotas do node.js

// npm instal npm ejs --save   instalando ejs

const express = require("express"); 

const app = express(); 

app.set('view engine', 'ejs')// definindo EJS como renderizador de html. Padrão de nome para pastas EJS é 'views', todos os arquivos ejs devem ser inseridos la



app.get('/', function(req,res){
    res.send()
})







app.listen(4000/* porta local*/,function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso");
    } 
})