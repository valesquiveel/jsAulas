class Cliente {
    nome;
    dataNasc;
    cpf;
    conta;
    agencia;
    saldo;
    sacar(valor){
        if (this.saldo >= valor){
            this.saldo = this.saldo - valor;
            return `Valor sacado : R$${valor}`;
        }else{
            return "Operação não autorizada. Tá quebrado hein!"
        }

    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo = this.saldo + valor;
            return `Valor depositado : R$${valor}`;
        } else {
            return "Operação não autorizada! Faça um depósito de pelo menos R$0,01"
        }
                
    }
    consultarSaldo(){
        return `O saldo da conta é de R$${this.saldo}`
    }
}

var cliente1 = new Cliente();
cliente1.nome = "Leonardo";
cliente1.dataNasc = "25/02/1998";
cliente1.cpf = 999999;
cliente1.conta = "001";
cliente1.agencia = "F001";
cliente1.saldo = 0;

console.log(cliente1)

var cliente2 = new Cliente();