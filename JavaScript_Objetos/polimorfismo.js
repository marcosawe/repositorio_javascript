/* Polimorfismo */

// Polimorfismo é quando queremos que os filhos se comportem diferente dos seus pais, ou seja, temos os mesmo métodos, com os mesmos nomes mas com diferentes comportamentos.

// Criando uma conta bancária com polimorfismo:

// Super Classe
function Conta (agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
    console.log(`Saldo insuficiente: ${this.saldo}`)    
    return
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Agência ${this.agencia} | Conta ${this.conta} | Saldo R$${this.saldo.toFixed(2)}`);

}

const contaMarcela = new Conta(11,34,0)
contaMarcela.sacar(6)