import style from './botao.module.scss';

type BotaoProps = {
  children?: React.ReactNode;
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
};

const Botao = ({ children, type = "button", onClick }: BotaoProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}>
      {children}
    </button>
  )
}

export default Botao;
