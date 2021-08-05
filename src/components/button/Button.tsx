import React, { useContext } from "react";
import { DONE, REMOVE } from "../../logic/constants";
import { Context } from "../../logic/state";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Button = (props: object | any) => {
  const { dispatch } = useContext(Context);

  return (
    <button
      title={
        props.command === DONE || props.command === REMOVE ? props.command : ""
      }
      onClick={() => {
        dispatch({
          type: props.command,
          payload: props.payload,
          ident: props.ident
        });
      }}
    >
      {props.command === DONE ? (
        <DoneOutlineIcon />
      ) : props.command === REMOVE ? (
        <DeleteOutlineIcon />
      ) : (
        props.command
      )}
    </button>
  );
};

export default Button;
