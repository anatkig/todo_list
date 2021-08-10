import React, { useContext } from "react";
import { Context } from "../../logic/state";

const Button = (props: object | any) => {
  const { dispatch } = useContext(Context);
  return (
    <button
      title={props.command}
      onClick={() =>
        dispatch({
          type: props.command,
          message: "",
          key: 0,
          ident: props.ident,
        })
      }
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
