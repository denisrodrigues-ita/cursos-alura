import style from './botao.module.scss';

type BotaoProps = {
  children: string;
  type?: "button" | "reset" | "submit" | undefined;
};

const Botao = ({ children, type = "button" }: BotaoProps) => {
  return (
    <button
      type={type}
      className={style.botao}>
      {children}
    </button>
  )
}

export default Botao;
