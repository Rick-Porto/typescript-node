import Pessoa from './pessoa';
import Cargo from './cargo';

class Funcionario extends Pessoa {
    constructor(
        cpf: string,
        nome: string,
        telefone: string,
        public salario: number,
        public cargo: Cargo
    ) {
        super(cpf, nome, telefone);
    }

    autenticar(): boolean {
        // Lógica de autenticação (retorna true ou false)
        return true;
    }

    getSalario(): number {
        return this.salario;
    }

    getCargo(): Cargo {
        return this.cargo;
    }
}

export default Funcionario;
