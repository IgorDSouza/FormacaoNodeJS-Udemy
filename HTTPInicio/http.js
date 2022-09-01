// HTTP = Protocolo de transferencia de dados na web que compartilha informações.

// Biblioteca http do nodeJS
var http = require("http");

// Criando servidor http
http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1> <script>window.alert('ola')</script>");
}).listen(8181);

console.log("Servidor funcionando");