import Conta from './conta';
import Debito from './debito';
import Pessoa from './pessoa';

class ContaPoupanca extends Conta {
  private creditos: number[] = [];
  private debitos: Debito[] = [];
  constructor(numero: string, titular: Pessoa) {
    super(numero, titular);
  }

  depositar(valor: number): void {
    this.creditos.push(valor);
  }

  sacar(valor: number): void {
    if (this.calcularSaldo() - valor >= 0) {
      this.debitos.push(new Debito(valor, new Date()));
    } else {
      console.log('Saldo insuficiente.');
    }
  }

  calcularSaldo(): number {
    const saldo = this.creditos.reduce((acc, cur) => acc + cur, 0);
    const debitosTotal = this.debitos.reduce((acc, cur) => acc + cur.valor, 0);
    return saldo - debitosTotal;
  }
}

export default ContaPoupanca;
