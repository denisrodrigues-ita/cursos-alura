import React from 'react';
import opcoes from './opcoes.json';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

const Ordenador = ({ ordenador, setOrdenador }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const nomeOrdenador = opcoes.find((opcao) => opcao.value === ordenador)?.nome;

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <button
      className={`bg-neutral-400 mt-2 mr-2 px-2 py-1 rounded text-neutral-100 w-40
       ${ordenador && 'bg-neutral-700'} `}
      onClick={handleOpen}
      onBlur={() => setIsOpen(false)}>
      <span className='flex justify-between'>{nomeOrdenador || "Ordenar Por"} <ChevronUpIcon width={20}
        className={`${isOpen ? 'rotate-180 transform transition-transform duration-500 ease-in-out' : 'rotate-0 transform transition-transform duration-500 ease-in-out'}`}
      /></span>


      <div className={`${isOpen ? 'flex-col' : 'hidden'}`}>{opcoes.map((item) => (
        <div
          key={item.value}
          className='hover:bg-neutral-500 py-1 h-8'
          onClick={() => setOrdenador(item.value)}>{item.nome}</div>
      ))}
      </div>
    </button>
  )
}

export default Ordenador;
