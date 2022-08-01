import React, { Component } from "react";
import style from "./Button.module.scss";

class Button extends Component {
  render() {
    return <button className={style.botao}>Botão</button>;
  }
}

export default Button;
