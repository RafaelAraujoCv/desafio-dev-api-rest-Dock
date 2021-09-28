const Conta = require('../models/contaModel')

module.exports = app => {
    app.get('/contas', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))

    //criação de uma conta
    app.post('/conta/criar', (req, res) => {
        const dadosConta = req.body

        Conta.criarConta(dadosConta)
        res.send('Post criar conta')
    })

    //depósito em uma conta
    app.post('/conta/depositar', (req, res) => {
        const dadosDeposito = req.body

        Conta.depositarConta(dadosDeposito)
        res.send('Post depositar em conta')
    })

    //consulta de saldo em determinada conta
    app.post('/conta/consultar/saldo', (req, res) => {
        const dadosConsultarConta = req.body

        Conta.consultaSaldoConta(dadosConsultarConta)
        res.send('Post consultar saldo em conta')
    })

    //saque em uma conta
    app.post('/conta/saque', (req, res) => {
        const dadosSaqueConta = req.body

        Conta.saqueConta(dadosSaqueConta)
        res.send('Post saque conta')
    })

    //bloqueio de uma conta
    app.post('/conta/bloquear', (req, res) => {
        const dadosBloquearConta = req.body

        Conta.bloqueioConta(dadosBloquearConta)
        res.send('Post bloquear conta')

    })

    //recupera o extrato de transações de uma conta
    app.post('/conta/extrato/transacao', (req, res) => {
        const dadosExtratoTransacao = req.body

        Conta.extratoTransacaoConta(dadosExtratoTransacao)
        res.send('Post extrato de transações em conta')

    })
}