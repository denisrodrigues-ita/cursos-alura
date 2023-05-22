import React from "react"
import Cronometro from "../components/Cronometro"
import Formulario from "../components/Formulario"
import Lista from "../components/Lista"
import style from './app.module.scss'
import { ITarefa } from "../types/tarefa"


const App = () => {
  const [tarefas, setTarefas] = React.useState<Array<ITarefa>>([])
  const [selecionado, setSelecionado] = React.useState<ITarefa>();

  const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map((item) => ({
      ...item,
      selecionado: item.id === tarefaSelecionada.id ? true : false,
    })))
  }

  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map((item) => {
        if (item.id === selecionado.id) {
          return {
            ...item,
            selecionado: false,
            completado: true,
          }
        }
        return item;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa} />
    </div>
  )
}


export default App;