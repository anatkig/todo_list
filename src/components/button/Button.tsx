import React from "react";

const Button = (props: object | any) => {
  return (
    <button
      title={props.command}
      onClick={e => {
        e.preventDefault();
        props.onClick(props.command);
      }}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
