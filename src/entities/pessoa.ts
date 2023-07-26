abstract class Pessoa {
  constructor(public cpf: string, public nome: string, public telefone: string) {}

  abstract autenticar(): boolean;

  getCPF(): string {
      return this.cpf;
  }

  getNome(): string {
      return this.nome;
  }

  getTelefone(): string {
      return this.telefone;
  }
}

export default Pessoa;

  