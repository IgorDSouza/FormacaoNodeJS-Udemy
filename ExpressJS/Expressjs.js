// Framework para construir aplicações web back end, vamos usa-lo para substituir a biblioteca http do node pois é mt limitado

//npm instal express --save instalando express

// REQ => DADOS ENVIADOS PELO USUARIO;
// RES => RESPOSTA ENVIADA PELO SERVIDOR.(TEXTO, HTML,XML,JSON ETC ETC) QUE SÓ PODE SER ENVIADA UMA VEZ.

const express = require("express"); //importa a biblioteca

const app = express(); // funcao que vai carregar todo o framework na constante


app.get/* criando rota para direcionar o usuario*/("/"/* definição de qual rota do servidor sera direcionado(no caso a rota vai pra pagina inicial) */,function(req,res){
    res.send("Bem Vindo ao meu site com Express JS top");
}); 

app.get("/blog", function(req,res){

    res.send("Bem vindo ao Meu blog ");

})

app.get("/forum", function(req,res){
    res.send("Bem vindo ao meu forum");
})


// ------------- ROTAS COM PARAMETROS ----------------

// ROTA COM PARAMETRO OBRIGATORIO(n funciona se n for passado)
app.get("/ola/:nome/:empresa", function(req,res){
    var nome =  req.params.nome // pega os parametros passados pelo usuario (no caso nome)
    var empresa = req.params.empresa

    res.send(`Bom dia ${nome} do ${empresa}`);
})
//ROTA COM PARAMETROS OPCIONAIS
app.get("/videos/:nomevideo?", function(req,res){
    var nomevideo = req.params.nomevideo;
    if(nomevideo){
    res.send(`Video:${nomevideo}`);
    }else{
        res.send("Videos aleatórios");
    }
})

//  QUERY PARAMS(ENVIA PARAMETROS DE FORMA DINAMICA PARA QUALQUER ROTA, SEM SER FIXO) **** entrando em esquecimento
 
app.get("/canal/youtube"/*?canal=*/, function(req,res){
    var canal=req.query['canal'];
    if(canal){
           res.send(canal);
    }else{
        res.send("Nenhum canal passado");
    }
})

// 'rodando' O SERVIDOR(SEMPRE É DEIXADO NO FINAL DO CODIGO POR BOAS PRATICAS)
app.listen(4000/* porta local*/,function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso");
    } // primeira função sempre trata o erro de conexão com o servidor
})

// Para o servidor atualizar automaticamente usaremos nodemon (npm install nodemon -g)(-g pq é instalado globalmente no computador)
// para usa-lo chamamos nodemon (nome do arquivo)


