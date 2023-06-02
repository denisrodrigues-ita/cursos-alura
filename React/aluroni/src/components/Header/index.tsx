import React from 'react';
import { Link } from 'react-router-dom';
import LogoSVG from "/@/assets/LogoSvg";

const Header = () => {
  const rotas = [
    { nome: 'Home', link: '/' },
    { nome: 'Cardápio', link: '/cardapio' },
    { nome: 'Sobre', link: '/sobre' }
  ]

  return (
    <header className="py-2 w-screen m-0 p-0 mb-16">
      <nav className="my-2 flex">
        <LogoSVG />
        <ul className='flex ml-8 gap-8 items-center'>
          {rotas.map((rota) => (
            <li key={rota.nome}>
              <Link className='text-lg border-b border-neutral-700 hover:border-neutral-400 hover:text-neutral-400' to={rota.link}>{rota.nome}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="bg-[url('/@/assets/img/header.png')] h-72 bg-cover bg-no-repeat flex items-center">
        <h2 className="text-6xl sm:text-7xl text-neutral-300 max-w-md">A casa do código e da massa</h2>
      </div>
    </header>
  )
}

export default React.memo(Header);
