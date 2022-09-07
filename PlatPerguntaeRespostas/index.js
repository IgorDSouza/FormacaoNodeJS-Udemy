// usaremos ESJ(EMBEDDED JAVASCRIPT TEMPLATING) para renderizar html através das rotas do node.js

// npm instal npm ejs --save   instalando ejs

const express = require("express"); 

const app = express(); 

const bodyParser= require("body-parser");

const perguntaModel=require('./database/Perguntas')

const connection= require('./database/database');
const Pergunta = require("./database/Perguntas");

connection
    .authenticate()
    .then(()=>{
        console.log("conexao com banco feito c sucesso")
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    })

app.use(bodyParser.urlencoded({extended:false}));// decodificando os dados do formulario

app.use(bodyParser.json());// decodifica dados enviados por json tambem

app.use(express.static('public'));

app.set('view engine', 'ejs')// definindo EJS como renderizador de html. Padrão de nome para pastas EJS é 'views', todos os arquivos ejs devem ser inseridos la



// app.get('/:nome?/:idade?', function(req,res){
//     var nome = req.params.nome;
//     var idade = req.params.idade;
//     var email = `${nome}${idade}@hotmail.com`;

//     if(nome,idade){

//     res.render('index', {
//         nome:nome,
//         idade:idade,
//         email:email
//     });
// }
// else{

//     res.render('index', {
//         nome:'seu nome',
//         idade:'sua idade',
//         email:'seunome+idade@hotmail.com'
//     });// .render para renderizar o arquivo html, o segundo parametro são as variaveis que desejamos usar no html.
// }
//

app.get('/', function(req,res){

    Pergunta.findAll({raw:true}).then(perguntas =>{
        console.log(perguntas);
        res.render('index',{
            perguntas:perguntas
        });
    });// .findAll faz um select na tabela model, no caso a Pergunta.
    // raw:true filtra outros dados trazendo só os dados das tabelas
    // o .then esta imprimindo no console esses dados
    

    });


app.get('/perguntas', function(req,res){
    
        res.render('perguntas', {
      
        });
    });

app.post('/salvaperguntas', function(req,res){ // .post pega informações envadas pelo formulário
    
    var titulo = req.body.titulo;
    var descricao= req.body.pergunta;
        
    perguntaModel.create({
        titulo:titulo,
        descricao:descricao
    }) // inserindo dados no banco de dados
    .then(()=>{
        res.redirect("/")
    }) // após os dados serem enviados, o usuario vai redirecionado para a primeira pagina


    });
    //npm instal body-parser --save para baixar a biblioteca que salva as informações post

    //npm install --save sequelize para manipular o sql com codigos js
    //npm install --save mysql2 para o sequelize trabalhar com o mysql

app.listen(4000/* porta local*/,function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso");
    } 
});
