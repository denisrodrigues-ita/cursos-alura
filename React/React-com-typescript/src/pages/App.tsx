import React from "react"
import Cronometro from "../components/Cronometro"
import Formulario from "../components/Formulario"
import Lista from "../components/Lista"
import style from './app.module.scss'
import { ITarefa } from "../types/tarefa"


const App = () => {
  const [tarefas, setTarefas] = React.useState<Array<ITarefa>>([])

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  )
}

export default App