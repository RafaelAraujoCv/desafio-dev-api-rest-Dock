const Conta = require('../models/contaModel')

module.exports = app => {
    app.get('/contas', (req, res) => res.send('<html><h2>Você está na rota de conta e está realizando um GET</h2></html>'))

    //criação de uma conta - OK
    app.post('/conta/criar', (req, res) => {
        const dadosConta = req.body

        Conta.criarConta(dadosConta, res)
        //res.send('Post criar conta')
    })

    //depósito em uma conta - OK
    app.patch('/conta/depositar/:idConta', (req, res) => {
        const idConta = parseInt(req.params.idConta)
        const dadosDeposito = req.body

        Conta.depositarConta(idConta, dadosDeposito, res)
        //res.send('Post depositar em conta')
    })

    //consulta de saldo em determinada conta - VERIFICAR
    app.get('/conta/consultar/saldo/:idConta', (req, res) => {
        const idConta = parseInt(req.params.idConta)
        //const dadosConsultarConta = req.body

        Conta.consultaSaldoConta(idConta, res)
        //res.send('Post consultar saldo em conta')
    })

    //saque em uma conta - OK
    app.patch('/conta/saque/:idConta', (req, res) => {
        const idConta = parseInt(req.params.idConta)
        const dadosSaqueConta = req.body

        Conta.saqueConta(idConta, dadosSaqueConta, res)
        //res.send('Post saque conta')
    })

    //bloqueio de uma conta - OK
    app.patch('/conta/bloquear/:idConta', (req, res) => {
        const idConta = parseInt(req.params.idConta)
        const dadosBloquearConta = req.body

        Conta.bloqueioConta(idConta, dadosBloquearConta, res)
        //res.send('Post bloquear conta')
    })

    //recupera o extrato de transações de uma conta - OK
    app.get('/conta/extrato/transacao/:idConta', (req, res) => {
        const idConta = parseInt(req.params.idConta)
        //const dadosExtratoTransacao = req.body

        Conta.extratoTransacaoConta(idConta, res)
        //res.send('Post extrato de transações em conta')
    })

    //recupera o extrato de transações de uma conta por data - OK
    app.get('/conta/extrato/transacao/data/:idConta', (req, res) => {
        const idConta = parseInt(req.params.idConta)
        const dadosData = req.body

        console.log(dadosData)

        Conta.extratoTransacaoContaPorData(idConta, dadosData, res)
        //res.send('Post extrato de transações em conta')
    })
}