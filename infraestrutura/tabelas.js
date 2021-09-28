//Classe para criar tabelas
class Tabelas {
    //Recebe conexao e inicializa as tabelas
    init(conexao) {
        this.conexao = conexao

        this.criarContas()
    }

    criarContas() {
        const sql = 'CREATE TABLE IF NOT EXISTS Contas (idConta int NOT NULL AUTO_INCREMENT, idPessoa int NOT NULL, saldo decimal(6,2) NOT NULL, limiteSaqueDiario decimal(5,2) NOT NULL, flagAtivo tinyint(1) NOT NULL, tipoConta int NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(idConta))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log('Erro: ' + erro)
            } else {
                console.log('Tabela Contas criada com sucesso!')
            }
        })
    }

    criarTransacoes() {
        const sql = 'CREATE TABLE IF NOT EXISTS Transacoes (idTransacao int NOT NULL AUTO_INCREMENT, idConta init NOT NULL, valor decimal(6,2) NOT NULL, dataTransacao datetime NOT NULL, PRIMARY KEY(idTransacao))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log('Erro: ' + erro)
            } else {
                console.log('Tabela Transacoes criada com sucesso!')
            }
        })
    }

    criarPessoas() {
        const sql = 'CREATE TABLE IF NOT EXISTS Pessoas (idPessoa int NOT NULL AUTO_INCREMENT, idConta init NOT NULL, nome varchar(100) NOT NULL, cpf varchar(11) NOT NULL, dataNascimento datetime NOT NULL, PRIMARY KEY(idPessoa))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log('Erro: ' + erro)
            } else {
                console.log('Tabela Pessoas criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabelas