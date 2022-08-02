import React, { Component } from "react";
import style from "./Button.module.scss";

class Button extends Component<{ text: string }> {
  render() {
    const { text } = this.props;
    return <button className={style.botao}>{text}</button>;
  }
}

export default Button;
