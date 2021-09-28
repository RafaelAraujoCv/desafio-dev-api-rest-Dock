//Conecta com a database e exporta conexao

const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'operacao-bancaria'
})

module.exports = conexao