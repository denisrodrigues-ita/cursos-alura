import { ITarefa } from '../../../types/tarefa';
import style from './item.module.scss'

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

const Item = ({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) => {

  return (
    <li
      key={tarefa}
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
      onClick={() => !completado && selecionaTarefa({ tarefa, tempo, selecionado, completado, id })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}

export default Item;
