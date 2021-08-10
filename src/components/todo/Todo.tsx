import Button from "../button/Button";
import { DONE, REMOVE } from "../../logic/constants";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Todo = (props: object | any) => {
  return (
    <div className={`todo ${props.type}`}>
      <div>{props.message}</div>
      <div className="buttonContainer">
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
