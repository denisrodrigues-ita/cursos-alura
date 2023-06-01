import { IItens } from '/@/types/IItens';

const Item = (props: IItens) => {
  const { title, description, photo, size, serving, price, id, category } = props;

  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-start bg-neutral-400 rounded-lg">
      <div>
        <img className="rounded-lg" src={photo} alt={title} />
      </div>
      <div className="ml-2 md:w-2/5">
        <h3 className="text-3xl">{title}</h3>
        <p className="">{description}</p>
        <div className="mt-8 flex justify-between m-2">
          <span className="bg-red-700 px-2 py-1 rounded text-neutral-200">{category.label}</span>
          <span>{size}g</span>
          <span>{serving} pessoa{serving > 1 ? "s" : ""}</span>
          <span className="font-bold text-red-700">R$ <span className="italic">{price.toFixed(2).replace('.', ',')}</span></span>
        </div>
      </div>
    </div>
  )
}

export default Item;
