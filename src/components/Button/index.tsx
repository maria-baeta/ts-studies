import style from "./Button.module.scss";

interface PROPS_BUTTON {
  text: string;
  onClick?: () => void | undefined | false;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button = ({ text, type, onClick, disabled }: PROPS_BUTTON) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`${disabled ? style.disabled : style.botao}`}
    >
      {text}
    </button>
  );
};

export default Button;
