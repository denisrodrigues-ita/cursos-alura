import filtros from './filtros.json';

interface IOpcao {
  id: number;
  label: string;
}

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros = ({ filtro, setFiltro }: Props) => {

  const selecionarFiltro = (item: IOpcao) => {
    if (filtro === item.id) return setFiltro(null);
    return setFiltro(item.id);
  }

  return (
    <div>
      {filtros.map((item) => (
        <button
          className={` bg-neutral-400 mr-1 md:mr-2 px-2 py-1 rounded text-neutral-100 hover:bg-neutral-700/80
           ${filtro === item.id ? 'bg-neutral-700' : ''}`}
          key={item.id} onClick={() => selecionarFiltro(item)}>
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default Filtros