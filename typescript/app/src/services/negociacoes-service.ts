import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public async obterNegociacoesDoDia(): Promise<Array<Negociacao>> {
    const response: Response = await fetch("http://localhost:8080/dados");
    const dados = await response.json();
    return dados.map((dadoDeHoje: any) => {
      return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
    });
  }
}
