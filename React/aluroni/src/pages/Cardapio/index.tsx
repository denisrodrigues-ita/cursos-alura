import React from "react";
import Buscador from "./Buscador";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from './Itens';

const Cardapio = () => {
  const [busca, setBusca] = React.useState("");
  const [filtro, setFiltro] = React.useState<number | null>(null);
  const [ordenador, setOrdenador] = React.useState("");

  return (
    <main>
      <h2 className="text-3xl">Cardápio</h2>
      <div className="my-2">
        <Buscador
          busca={busca}
          setBusca={setBusca} />
      </div>
      <div className="flex flex-col md:flex-row justify-between my-4">
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </main>
  )
}

export default Cardapio;
