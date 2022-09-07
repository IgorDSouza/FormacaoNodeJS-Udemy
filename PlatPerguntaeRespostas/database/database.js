const sequelize = require('sequelize');

const connection = new sequelize('perguntaserespostas','root','dedonis123',{
    host:'localhost',
    dialect:'mysql'

});

module.exports = connection;