import React from "react";
import Botao from "../Botao";
import style from './formulario.module.scss';
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from 'uuid';

interface FormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<Array<ITarefa>>>
}

const Formulario = ({ setTarefas }: FormularioProps) => {
  const [state, setState] = React.useState({
    tarefa: '',
    tempo: '00:00:00',
  });


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTarefas(tarefasAntigas => [...tarefasAntigas, {
      ...state,
      selecionado: false,
      completado: false,
      id: uuidv4()
    }]);
    setState({ tarefa: '', tempo: '00:00:00' });
  }

  return (
    <form className={style.novaTarefa} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={state.tarefa}
          onChange={({ target }) => setState({ ...state, tarefa: target.value })}
          placeholder="Digite o nome do estudo"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo"></label>
        <input
          type="time"
          value={state.tempo}
          onChange={({ target }) => setState({ ...state, tempo: target.value })}
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit" >
        adicionar
      </Botao>
    </form>
  )
}

export default Formulario;
