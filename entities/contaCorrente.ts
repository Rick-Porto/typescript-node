import Conta from './conta';
import Debito from './debito';
import Pessoa from './pessoa';

class ContaCorrente extends Conta {
  private creditos: number[] = [];
  private debitos: Debito[] = [];
  constructor(numero: string, titular: Pessoa, public limite: number) {
    super(numero, titular);
  }

  depositar(valor: number): void {
    this.creditos.push(valor);
  }

  sacar(valor: number): void {
    if (this.calcularSaldo() - valor >= -this.limite) {
      this.debitos.push(new Debito(valor, new Date()));
    } else {
      console.log('Saldo insuficiente ou limite atingido.');
    }
  }

  calcularSaldo(): number {
    const saldo = this.creditos.reduce((acc, cur) => acc + cur, 0);
    const debitosTotal = this.debitos.reduce((acc, cur) => acc + cur.valor, 0);
    return saldo - debitosTotal;
  }
}

export default ContaCorrente;
