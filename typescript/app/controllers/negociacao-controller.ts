import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (this.ehDiaUtil(negociacao.data)) {
      this.negociacoes.adiciona(negociacao);
      this.limparFormulario();
      this.atualizaView();
    } else {
      this.mensagemView.update(
        "Negociações só podem ser feitas em dias úteis!"
      );
    }
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "1";
    this.inputValor.value = "0.0";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!");
  }

  private ehDiaUtil(data: Date): boolean {
    if (
      data.getDay() != DiasDaSemana.DOMINGO &&
      data.getDay() != DiasDaSemana.SABADO
    )
      return true;
    else return false;
  }
}