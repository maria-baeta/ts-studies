import style from "./Button.module.scss";

interface PROPS_BUTTON {
  text: string;
  onClick?: () => void | undefined;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ text, type, onClick }: PROPS_BUTTON) => {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {text}
    </button>
  );
};

export default Button;
