const Conta = require('../models/contaModel')

module.exports = app => {
    app.get('/contas', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))

    //criação de uma conta
    app.post('/conta/criar', (req, res) => {
        const dadosConta = req.body

        Conta.criarConta(dadosConta, res)
        //res.send('Post criar conta')
    })

    //depósito em uma conta
    app.patch('/conta/depositar/:idConta', (req, res) => {
        const idConta = parseInt(req.params.idConta)
        const dadosDeposito = req.body

        Conta.depositarConta(idConta, dadosDeposito, res)
        //res.send('Post depositar em conta')
    })

    //consulta de saldo em determinada conta
    app.post('/conta/consultar/saldo', (req, res) => {
        const dadosConsultarConta = req.body

        Conta.consultaSaldoConta(dadosConsultarConta, res)
        //res.send('Post consultar saldo em conta')
    })

    //saque em uma conta
    app.patch('/conta/saque/:idConta', (req, res) => {
        const idConta = parseInt(req.params.idConta)
        const dadosSaqueConta = req.body

        Conta.saqueConta(idConta, dadosSaqueConta, res)
        //res.send('Post saque conta')
    })

    //bloqueio de uma conta
    app.patch('/conta/bloquear/:idConta', (req, res) => {
        const idConta = parseInt(req.params.idConta)
        const dadosBloquearConta = req.body

        Conta.bloqueioConta(idConta, dadosBloquearConta, res)
        //res.send('Post bloquear conta')
    })

    //recupera o extrato de transações de uma conta
    app.post('/conta/extrato/transacao', (req, res) => {
        const dadosExtratoTransacao = req.body

        Conta.extratoTransacaoConta(dadosExtratoTransacao, res)
        //res.send('Post extrato de transações em conta')
    })
}