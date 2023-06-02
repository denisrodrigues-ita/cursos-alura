import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ({ busca, setBusca }: Props) => {
  return (
    <div className='flex'>
      <input
        className="bg-neutral-400 rounded-l pl-2 placeholder-neutral-100"
        placeholder="Buscar"
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
        type="text" />
      <MagnifyingGlassIcon className="h-100 w-5 text-neutral-100 bg-neutral-400 rounded-r" />
    </div>
  )
}

export default Buscador;
