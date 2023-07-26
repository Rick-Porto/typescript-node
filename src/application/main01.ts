import Endereco from '../entities/endereco';
import Cliente from '../entities/cliente';
import Funcionario from '../entities/funcionario';
import Cargo from '../entities/cargo';
import ContaCorrente from '../entities/contaCorrente';
import ContaPoupanca from '../entities/contaPoupanca';

// Criando os cargos
const cargoGerente = new Cargo('Gerente');
const cargoAtendente = new Cargo('Atendente');

// Criando os funcionários e atribuindo-os aos respectivos cargos
const gerente = new Funcionario('111.222.333-44', 'Gerente', '(11) 98765-4321', 5000, cargoGerente);
const atendente = new Funcionario('222.333.444-55', 'Atendente', '(11) 12345-6789', 3000, cargoAtendente);

// Exibindo os dados dos funcionários
console.log('Dados do Gerente:');
console.log('CPF:', gerente.cpf);
console.log('Nome:', gerente.nome);
console.log('Telefone:', gerente.telefone);
console.log('Salário:', gerente.salario);
console.log('Cargo:', gerente.cargo.nome);

console.log('\nDados do Atendente:');
console.log('CPF:', atendente.cpf);
console.log('Nome:', atendente.nome);
console.log('Telefone:', atendente.telefone);
console.log('Salário:', atendente.salario);
console.log('Cargo:', atendente.cargo.nome);

