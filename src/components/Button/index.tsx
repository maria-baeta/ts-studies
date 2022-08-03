import React, { Component } from "react";
import style from "./Button.module.scss";

class Button extends Component<{
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    const { text, type = "button" } = this.props;
    return (
      <button type={type} className={style.botao}>
        {text}
      </button>
    );
  }
}

export default Button;
