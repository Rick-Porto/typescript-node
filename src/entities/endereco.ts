class Endereco {
  constructor(
      public cep: string,
      public logradouro: string,
      public numero: string,
      public complemento: string,
      public cidade: string,
      public uf: string
  ) {}

  getCep(): string {
      return this.cep;
  }

  getLogradouro(): string {
      return this.logradouro;
  }

  getNumero(): string {
      return this.numero;
  }

  getComplemento(): string {
      return this.complemento;
  }

  getCidade(): string {
      return this.cidade;
  }

  getUf(): string {
      return this.uf;
  }
}

export default Endereco;
