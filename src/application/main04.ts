import Endereco from '../entities/endereco';
import Cliente from '../entities/cliente';
import ContaCorrente from '../entities/contaCorrente';
import ContaPoupanca from '../entities/contaPoupanca';

// Criando o cliente com conta corrente
const cliente4ContaCorrente = new Cliente('111.222.333-44', 'Cliente 4 (Conta Corrente)', '(11) 98765-4321', true);
const contaCorrente3 = new ContaCorrente('1234', cliente4ContaCorrente, 1000);

// Efetuando um depósito de 1000 na conta corrente
contaCorrente3.depositar(1000);

// Criando o cliente com conta poupança
const cliente4ContaPoupanca = new Cliente('444.555.666-77', 'Cliente 4 (Conta Poupança)', '(11) 98765-4321', false);
const contaPoupanca2 = new ContaPoupanca('5678', cliente4ContaPoupanca);

// Efetuando um depósito de 1000 na conta poupança
contaPoupanca2.depositar(1000);

// Efetuando a transferência de 500 da conta corrente para a conta poupança
const valorTransferencia = 500;
if (contaCorrente3.calcularSaldo() >= valorTransferencia) {
  contaCorrente3.sacar(valorTransferencia);
  contaPoupanca2.depositar(valorTransferencia);
  console.log(`Transferência de R$ ${valorTransferencia} realizada com sucesso.`);
} else {
  console.log('Saldo insuficiente na conta corrente para efetuar a transferência.');
}

// Exibindo o saldo das duas contas
console.log('Saldo da Conta Corrente:', contaCorrente3.calcularSaldo());
console.log('Saldo da Conta Poupança:', contaPoupanca2.calcularSaldo());
