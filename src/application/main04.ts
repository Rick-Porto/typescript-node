import Cliente from '../entities/cliente';
import ContaCorrente from '../entities/contaCorrente';
import ContaPoupanca from '../entities/contaPoupanca';

// Criando o cliente com conta corrente
const clienteContaCorrente = new Cliente('111.222.333-44', 'Cliente com Conta Corrente', '(11) 98765-4321', true);
const contaCorrente = new ContaCorrente('1234', clienteContaCorrente, 1000);

// Efetuando um depósito de 1000 na conta corrente
contaCorrente.depositar(1000);

// Criando o cliente com conta poupança
const clienteContaPoupanca = new Cliente('444.555.666-77', 'Cliente com Conta Poupança', '(11) 98765-4321', false);
const contaPoupanca = new ContaPoupanca('5678', clienteContaPoupanca);

// Efetuando um depósito de 1000 na conta poupança
contaPoupanca.depositar(1000);

// Efetuando a transferência de 500 da conta corrente para a conta poupança
const valorTransferencia = 500;
if (contaCorrente.calcularSaldo() >= valorTransferencia) {
  contaCorrente.transferencia(contaPoupanca, valorTransferencia);
  console.log(`Transferência de R$ ${valorTransferencia} realizada com sucesso.`);
} else {
  console.log('Saldo insuficiente na conta corrente para efetuar a transferência.');
}

// Exibindo o saldo das duas contas
console.log('Saldo da Conta Corrente:', contaCorrente.calcularSaldo());
console.log('Saldo da Conta Poupança:', contaPoupanca.calcularSaldo());


