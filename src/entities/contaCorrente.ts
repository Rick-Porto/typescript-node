import Conta from './conta';
import Debito from './debito';
import Credito from './credito';
import Pessoa from './pessoa';
import ContaPoupanca from './contaPoupanca';

class ContaCorrente extends Conta {
    private creditos: Credito[] = [];
    private debitos: Debito[] = [];

    constructor(numero: string, titular: Pessoa, public limite: number) {
        super(numero, titular);
    }

    depositar(valor: number): void {
        this.creditos.push(new Credito(valor, new Date()));
    }

    sacar(valor: number): void {
        if (this.calcularSaldo() - valor >= -this.limite) {
            this.debitos.push(new Debito(valor, new Date()));
        } else {
            console.log('Saldo insuficiente ou limite atingido.');
        }
    }

    calcularSaldo(): number {
        const saldo = this.creditos.reduce((acc, cur) => acc + cur.valor, 0);
        const debitosTotal = this.debitos.reduce((acc, cur) => acc + cur.valor, 0);
        return saldo - debitosTotal;
    }

    getLimite(): number {
        return this.limite;
    }

    transferencia(contaDestino: ContaCorrente | ContaPoupanca, valor: number): void {
        if (this.calcularSaldo() >= valor) {
          this.sacar(valor);
          contaDestino.depositar(valor);
          console.log(`Transferência de R$ ${valor} realizada com sucesso.`);
        } else {
          console.log('Saldo insuficiente na conta corrente para efetuar a transferência.');
        }
      }
}

export default ContaCorrente;


