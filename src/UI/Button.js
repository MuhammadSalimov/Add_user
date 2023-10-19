import React from "react";
import claSS from "./Button.module.css";

const Button = (props) => {
  return <button onClick={props.onClick} className={claSS.button}>{props.children}</button>;
};

export default Button;
