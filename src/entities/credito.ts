class Credito {
  constructor(public valor: number, public data: Date) {}

  getValor(): number {
      return this.valor;
  }

  getData(): Date {
      return this.data;
  }
}

export default Credito;
