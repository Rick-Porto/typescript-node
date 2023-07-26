import Pessoa from './pessoa';

abstract class Conta {
    constructor(public numero: string, public titular: Pessoa) {}

    abstract depositar(valor: number): void;
    abstract sacar(valor: number): void;
    abstract calcularSaldo(): number;

    getNumero(): string {
        return this.numero;
    }

    getTitular(): Pessoa {
        return this.titular;
    }
}

export default Conta;
