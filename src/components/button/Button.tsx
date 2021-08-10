import React, { useContext } from "react";
import { DONE, REMOVE } from "../../logic/constants";
import { Context } from "../../logic/state";

const Button = (props: object | any) => {
  const { dispatch } = useContext(Context);

  return (
    <button
      title={
        props.command === DONE
          ? "Done"
          : props.command === REMOVE
          ? "Remove"
          : ""
      }
      onClick={() => {
        dispatch({
          type: props.command,
          message: props.payload,
          key: 0,
          ident: props.ident,
        });
      }}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
