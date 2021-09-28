const conexao = require('../infraestrutura/conexao')

class Conta {

    //criação de uma conta - VERIFICAR
    criarConta(dadosConta) {
        const sql = 'INSERT INTO Contas SET ?'

        conexao.query(sql, dadosConta, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    //depósito em uma conta - VERIFICAR
    depositarConta(dadosDeposito) {
        const sql = 'UPDATE'

        conexao.query(sql, dadosDeposito, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }


    //consulta de saldo em determinada conta
    consultaSaldoConta(dadosConsultarConta) {
        const sql = 'SELECT'

        conexao.query(sql, dadosConsultarConta, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    //saque em uma conta
    saqueConta(dadosSaqueConta) {
        const sql = 'UPDATE'

        conexao.query(sql, dadosSaqueConta, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    //bloqueio de uma conta
    bloqueioConta(dadosBloquearConta) {
        const sql = 'UPDATE'

        conexao.query(sql, dadosBloquearConta, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    //recupera o extrato de transações de uma conta
    extratoTransacaoConta(conta) {
        const sql = 'SELECT'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

}

module.exports = new Atendimento