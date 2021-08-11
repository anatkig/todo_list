import Button from "../button/Button";
import { DONE, REMOVE } from "../../logic/constants";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Context } from "../../logic/state";
import React, { useContext } from "react";

const Todo = (props: object | any) => {
  const { dispatch } = useContext(Context);

  const handleClick = (message: string) => {
    dispatch({
      type: message,
      message: "",
      key: 0,
      ident: props.ident,
    });
  };

  return (
    <div className={`todo ${props.type}`}>
      <div>{props.message}</div>
      <div className="buttonContainer">
        {props.type !== DONE ? (
          <Button
            command={DONE}
            ident={props.ident}
            icon={<DoneOutlineIcon />}
            onClick={handleClick}
          />
        ) : (
          ""
        )}
        <Button
          command={REMOVE}
          ident={props.ident}
          icon={<DeleteOutlineIcon />}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Todo;
