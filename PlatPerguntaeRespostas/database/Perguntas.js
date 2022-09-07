// model para criar os elementos do banco de dados

const sequelize= require("sequelize");

const connection = require("./database");

const Pergunta = connection.define('pergunta',{
    titulo:{// cria coluna titulo
        type: sequelize.STRING,
        allowNull:false // define o tipo da coluna (STRING) que recebe poucos caracteres.

        // allowNULL: impossibilita de criar um campo vazio nessa coluna
    },
    descricao:{
        type:sequelize.TEXT,
        allowNull:false//define o tipo da coluna (TEXT)que recebe muitos caracteres.
    }
});

Pergunta.sync({force:false})// sincroniza com o banco de dados verificando se existe ou n a tabela
.then(()=>{});

module.exports=Pergunta;