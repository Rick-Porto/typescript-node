import Pessoa from "./pessoa";

abstract class Conta {
    constructor(public numero: string, public titular: Pessoa) {}
  
    abstract depositar(valor: number): void;
    abstract sacar(valor: number): void;
    abstract calcularSaldo(): number;
  }
  
  export default Conta;