import { ITarefa } from '../../../types/tarefa';
import style from '../lista.module.scss'

const Item = ({ tarefa, tempo, selecionado, completado, id }: ITarefa) => {
  console.log('item atual ', { tarefa, tempo, selecionado, completado, id })
  return (
    <li key={tarefa} className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}

export default Item;