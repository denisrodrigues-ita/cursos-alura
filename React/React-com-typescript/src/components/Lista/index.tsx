import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './lista.module.scss'

const Lista = ({ tarefas }: { tarefas: Array<ITarefa> }) => {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            {...item}
            key={item.id} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;