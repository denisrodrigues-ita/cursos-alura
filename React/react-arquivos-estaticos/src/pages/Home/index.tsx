import Item from '/@/components/Item';
import cardapio from '/@/data/cardapio.json';

const Home = () => {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <section>
      <h3 className="text-3xl">Recomendações da cozinha</h3>
      <div>
        {pratosRecomendados.map((pratoRecomendado) => (
          <div key={pratoRecomendado.id} className='my-4'>
            <Item {...pratoRecomendado} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
