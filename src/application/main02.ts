import Endereco from '../entities/endereco';
import Cliente from '../entities/cliente';

// Criando os endereços
const endereco1 = new Endereco('12345-678', 'Rua A', '100', 'Apto 101', 'Cidade X', 'UF');
const endereco2 = new Endereco('98765-432', 'Rua B', '200', 'Casa 202', 'Cidade Y', 'UF');
const endereco3 = new Endereco('54321-876', 'Rua C', '300', 'Sala 303', 'Cidade Z', 'UF');

// Criando o cliente
const cliente1 = new Cliente('111.222.333-44', 'Cliente 1', '(11) 98765-4321', true);

// Adicionando os endereços ao cliente
cliente1.adicionarEndereco(endereco1);
cliente1.adicionarEndereco(endereco2);
cliente1.adicionarEndereco(endereco3);

// Imprimindo os endereços do cliente
console.log('Endereços do Cliente:');
cliente1.listarEnderecos();

