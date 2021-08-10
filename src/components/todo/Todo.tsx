import Button from "../button/Button";
import { DONE, REMOVE } from "../../logic/constants";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Context } from "../../logic/state";
import React, { useContext } from "react";

const Todo = (props: object | any) => {
  const { dispatch } = useContext(Context);

  const handleClick = (event: any) => {
    event.preventDefault();
    dispatch({
      type: event.target.closest("button").title,
      message: "",
      key: 0,
      ident: props.ident,
    });
  };

  return (
    <div className={`todo ${props.type}`}>
      <div>{props.message}</div>
      <div className="buttonContainer" onClick={handleClick}>
        {props.type !== DONE ? (
          <Button
            command={DONE}
            ident={props.ident}
            icon={<DoneOutlineIcon />}
          />
        ) : (
          ""
        )}
        <Button
          command={REMOVE}
          ident={props.ident}
          icon={<DeleteOutlineIcon />}
        />
      </div>
    </div>
  );
};

export default Todo;
