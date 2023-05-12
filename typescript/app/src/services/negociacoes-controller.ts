import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public async obternegociacoes(): Promise<Negociacao[]> {
    const response = await fetch("http://localhost:8080/dados");
    const dados = await response.json();
    const negociacoesDeHoje = dados.map((dado: NegociacoesDoDia) => {
      return new Negociacao(new Date(), dado.vezes, dado.montante);
    });
    return negociacoesDeHoje;
  }
}
