import React, { useContext } from "react";

import { Context } from "../../App";

const Button = (props: object | any) => {
  const { dispatch } = useContext(Context);

  return (
    <button
      className="button"
      onClick={() =>
        dispatch({
          type: props.command,
          payload: props.payload,
          ident: props.ident
        })
      }
    >
      {props.command}
    </button>
  );
};

export default Button;
