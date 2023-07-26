import Endereco from '../entities/endereco';
import Cliente from '../entities/cliente';
import ContaCorrente from '../entities/contaCorrente';

// Criando o cliente
const cliente3 = new Cliente('777.888.999-00', 'Cliente 3', '(11) 98765-4321', true);

// Criando a conta corrente para o cliente
const contaCorrente2 = new ContaCorrente('5678', cliente3, 1000);

// Efetuando três depósitos de 100 na conta corrente
contaCorrente2.depositar(100);
contaCorrente2.depositar(100);
contaCorrente2.depositar(100);

// Efetuando um saque de 50 reais na conta corrente
contaCorrente2.sacar(50);

// Imprimindo o valor do saldo da conta corrente
console.log('Saldo da Conta Corrente:', contaCorrente2.calcularSaldo());
