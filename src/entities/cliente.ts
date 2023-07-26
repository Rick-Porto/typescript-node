import Pessoa from './pessoa';
import Endereco from './endereco';
import IUsuario from './usuario';

class Cliente extends Pessoa implements IUsuario {
    private enderecos: Endereco[];

    constructor(cpf: string, nome: string, telefone: string, public vip: boolean) {
        super(cpf, nome, telefone);
        this.enderecos = [];
    }

    listarEnderecos(): void {
        this.enderecos.forEach((endereco, index) => {
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

    adicionarEndereco(endereco: Endereco): void {
        this.enderecos.push(endereco);
    }

    autenticar(): boolean {
        // Lógica de autenticação (retorna true ou false)
        return true;
    }

    getVip(): boolean {
        return this.vip;
    }
}

export default Cliente;


