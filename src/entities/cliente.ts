import Pessoa from './pessoa';
import Endereco from './endereco';
import IUsuario from './usuario';

class Cliente extends Pessoa implements IUsuario {
  constructor(cpf: string, nome: string, telefone: string, public vip: boolean) {
    super(cpf, nome, telefone);
  }

  listarEnderecos(enderecos: Endereco[]): void {
    enderecos.forEach((endereco, index) => {
      console.log(`Endereço ${index + 1}`);
      console.log(`CEP: ${endereco.cep}`);
      console.log(`Logradouro: ${endereco.logradouro}`);
      console.log(`Número: ${endereco.numero}`);
      console.log(`Complemento: ${endereco.complemento}`);
      console.log(`Cidade: ${endereco.cidade}`);
      console.log(`UF: ${endereco.uf}`);
      console.log('--------------------------');
    });
  }

  autenticar(): boolean {
    // Lógica de autenticação (retorna true ou false)
    return true;
  }
}

export default Cliente;
