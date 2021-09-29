const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Conta {

    //criação de uma conta - OK
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

    //depósito em uma conta - OK
    depositarConta(idConta, dadosDeposito, res) {
        const sql = 'UPDATE Contas SET saldo = saldo + ? WHERE idConta = ?'

        conexao.query(sql, [dadosDeposito.saldo , idConta], (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.status(400).json(erro)
            } else {
                //console.log(resultados)

                //logTransacaoConta(idConta, dadosDeposito.saldo, res)
                res.status(200).json(resultados)
            }
        })
    }

    //consulta de saldo em determinada conta - VERIFICAR
    consultaSaldoConta(idConta, res) {
        const sql = 'SELECT saldo FROM Contas WHERE idConta = ?'

        conexao.query(sql, idConta, (erro, resultados) => {

            const saldo = resultados[0]
            if(erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                console.log(resultados)
                //return res.resultados
                res.status(200).json(saldo)
            }
        })
    }

    //saque em uma conta - OK
    saqueConta(idConta, dadosSaqueConta, res) {
        const sql = 'UPDATE Contas SET saldo = saldo - ? WHERE idConta = ?'

        conexao.query(sql, [dadosSaqueConta.saldo, idConta], (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.status(400).json(erro)
            } else {
                //console.log(resultados)
                res.status(200).json(resultados)
            }
        })
    }

    //bloqueio de uma conta - OK
    bloqueioConta(idConta, dadosBloquearConta, res) {
        const sql = 'UPDATE Contas SET flagAtivo = ? WHERE idConta = ?'

        conexao.query(sql, [dadosBloquearConta.flagAtivo, idConta], (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.status(400).json(erro)
            } else {
                //console.log(resultados)
                res.status(200).json(resultados)
            }
        })
    }

    //recupera o extrato de transações de uma conta - OK
    extratoTransacaoConta(idConta, res) {
        const sql = 'SELECT * FROM Transacoes WHERE idConta = ?'

        conexao.query(sql, idConta, (erro, resultados) => {

            const extrato = resultados[0]
            if(erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                console.log(extrato)
                res.status(200).json(extrato)
            }
        })
    }

    //recupera o extrato de transações de uma conta por data - OK
    extratoTransacaoContaPorData(idConta, dadosData, res) {

        const dataInicio = moment(dadosData.dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const dataFinal = moment(dadosData.dataFinal, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const sql = 'SELECT * FROM Transacoes WHERE idConta = ? AND dataTransacao BETWEEN ? AND ?'

        conexao.query(sql, [ idConta, dataInicio, dataFinal], (erro, resultados) => {

            const transacaoPordata = resultados[0]
            if(erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                console.log(transacaoPordata)
                res.status(200).json(transacaoPordata)
            }
        })
    }

    //cria log de transacoes - depositar
    logTransacaoConta(idConta, saldo, res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        
        const valor = saldo

        const dadosLog = {...idConta, valor, dataCriacao}
        const sql = 'INSERT INTO Transacoes SET ?'

        conexao.query(sql, [idConta, saldo, dataCriacao], (erro, resultados) => {
            if(erro) {
                //console.log(erro)
                res.status(400).json(erro)
            } else {
                //console.log(resultados)
                res.status(200).json(resultados)
            }
        })
    }

}

module.exports = new Conta