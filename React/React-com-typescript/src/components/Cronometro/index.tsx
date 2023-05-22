import React from "react";
import tempoParaSegundos from "../../common/utils/time";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './cronometro.module.scss';
import { ITarefa } from "../../types/tarefa";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

const Cronometro = ({ selecionado, finalizarTarefa }: Props) => {
  const [tempo, setTempo] = React.useState<number>();

  React.useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado])

  const regressiva = (contador = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000)
  }


  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>

      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>

      <div>
        <Botao onClick={() => regressiva(tempo)}>
          Iniciar
        </Botao>
      </div>
    </div>
  )
}

export default Cronometro;
