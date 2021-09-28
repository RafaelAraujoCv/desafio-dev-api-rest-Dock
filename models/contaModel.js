const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Conta {

    //criação de uma conta - VERIFICAR
    criarConta(dadosConta, res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const dadosContaDatado = {...dadosConta, dataCriacao}

        const sql = 'INSERT INTO Contas SET ?'

        conexao.query(sql, dadosContaDatado, (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.status(400).json(erro)
            } else {
                //console.log(resultados)
                res.status(201).json(resultados)
            }
        })
    }

    //depósito em uma conta - VERIFICAR
    depositarConta(idConta, dadosDeposito, res) {
        const sql = 'UPDATE Contas SET saldo = saldo + ? WHERE idConta = ?'

        conexao.query(sql, [dadosDeposito.saldo , idConta], (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.json(erro)
            } else {
                //console.log(resultados)

                //logDepositarConta(idConta, dadosDeposito.saldo, res)
                res.json(resultados)
            }
        })
    }

    //consulta de saldo em determinada conta
    consultaSaldoConta(dadosConsultarConta, res) {
        const sql = 'SELECT'

        conexao.query(sql, dadosConsultarConta, (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.json(erro)
            } else {
                //console.log(resultados)
                res.json(resultados)
            }
        })
    }

    //saque em uma conta
    saqueConta(idConta, dadosSaqueConta, res) {
        const sql = 'UPDATE Contas SET saldo = saldo - ? WHERE idConta = ?'

        conexao.query(sql, [dadosSaqueConta.saldo, idConta], (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.json(erro)
            } else {
                //console.log(resultados)
                res.json(resultados)
            }
        })
    }

    //bloqueio de uma conta
    bloqueioConta(idConta, dadosBloquearConta, res) {
        const sql = 'UPDATE Contas SET flagAtivo = ? WHERE idConta = ?'

        conexao.query(sql, [dadosBloquearConta.flagAtivo, idConta], (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.json(erro)
            } else {
                //console.log(resultados)
                res.json(resultados)
            }
        })
    }

    //recupera o extrato de transações de uma conta
    extratoTransacaoConta(dadosExtratoTransacao, res) {
        const sql = 'SELECT'

        conexao.query(sql, dadosExtratoTransacao, (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.json(erro)
            } else {
                //console.log(resultados)
                res.json(resultados)
            }
        })
    }

    //cria log de transacoes - depositar
    logDepositarConta(idConta, saldo, res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const dadosLog = {...idConta, saldo, dataCriacao}

        const sql = 'INSERT INTO Transacoes SET ?'

        conexao.query(sql, dadosLog, (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.json(erro)
            } else {
                //console.log(resultados)
                res.json(resultados)
            }
        })
    }

}

module.exports = new Atendimento