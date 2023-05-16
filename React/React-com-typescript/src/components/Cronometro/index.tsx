import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './cronometro.module.scss';

const Cronometro = () => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>

      <div className={style.relogioWrapper}>
        <Relogio />
      </div>

      <div>
        <Botao>
          Iniciar
        </Botao>
      </div>
    </div>
  )
}

export default Cronometro;
