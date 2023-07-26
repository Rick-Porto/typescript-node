import Cliente from '../entities/cliente';
import ContaCorrente from '../entities/contaCorrente';

// Criando o primeiro cliente com conta corrente
const cliente5ContaCorrente1 = new Cliente('111.222.333-44', 'Cliente 5 (Conta Corrente 1)', '(11) 98765-4321', true);
const contaCorrente4 = new ContaCorrente('1234', cliente5ContaCorrente1, 100); 

// Efetuando um depósito de 300 na primeira conta corrente
contaCorrente4.depositar(300);

// Criando o segundo cliente com conta corrente
const cliente5ContaCorrente2 = new Cliente('444.555.666-77', 'Cliente 5 (Conta Corrente 2)', '(11) 98765-4321', false);
const contaCorrente5 = new ContaCorrente('5678', cliente5ContaCorrente2, 100); 

// Efetuando um depósito de 100 na segunda conta corrente
contaCorrente5.depositar(100);

// Tentando efetuar a transferência de 1000 reais da primeira conta corrente para a segunda conta corrente
const valorTransferencia = 1000;
if (contaCorrente4.calcularSaldo() >= valorTransferencia) {
  contaCorrente4.transferencia(contaCorrente5, valorTransferencia);
} else {
  console.log('Saldo insuficiente na primeira conta corrente para efetuar a transferência.');
}

// Exibindo o saldo atualizado das duas contas correntes
console.log('Saldo da Conta Corrente 1:', contaCorrente4.calcularSaldo());
console.log('Saldo da Conta Corrente 2:', contaCorrente5.calcularSaldo());



