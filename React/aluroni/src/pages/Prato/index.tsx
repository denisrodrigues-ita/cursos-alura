import { useLocation, useParams } from "react-router-dom";
import cardapio from "/@/data/cardapio.json";
import NotFound from "../NotFound";

const Pratos = () => {
  const { pratoId } = useParams();
  let prato = useLocation().state;

  if (!prato) {
    prato = cardapio.find((item) => item.id === Number(pratoId));
  }

  if (!prato) return <NotFound />;
  return (
    <section className="flex flex-col justify-center items-center bg-neutral-400 rounded">
      <h3 className="text-3xl text-center">{prato.title}</h3>
      <div>
        <img className="rounded-lg" src={prato.photo} alt={prato.title} />
      </div>
      <div className="ml-2 md:w-1/2 lg:w-1/3">
        <p className="text-center">{prato.description}</p>
        <div className="mt-8 flex justify-between mr-2 mb-2">
          <span className="bg-red-700 px-2 py-1 rounded text-neutral-200">
            {prato.category.label}
          </span>
          <span>{prato.size}g</span>
          <span>
            {prato.serving} pessoa{prato.serving > 1 ? "s" : ""}
          </span>
          <span className="font-bold text-red-700">
            R${" "}
            <span className="italic">
              {prato.price.toFixed(2).replace(".", ",")}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Pratos;
