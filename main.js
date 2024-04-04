function Conta(agencia, conta, saldo) {
     this.agencia = agencia;
     this.conta = conta;
     this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }

     this.saldo -= valor;
     this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
     this.saldo += valor;
}

Conta.prototype.verSaldo = function() {
     console.log(`Agência : ${this.agencia} | Conta: ${this.conta} | Saldo: ${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
     Conta.call(this, agencia, conta, saldo);
     this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
      Conta.call(this, agencia, conta, saldo);
 }
 
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


const cliente1 = new ContaCorrente(11, 22, 10, 100)
    cliente1.depositar(90);
    cliente1.sacar(200);

const cliente2 = new ContaPoupanca(18, 19, 10)
    cliente2.depositar(90);
    cliente2.sacar(20.50);
