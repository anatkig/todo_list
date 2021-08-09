import Button from "../button/Button";
import { DONE, REMOVE } from "../../logic/constants";

const Todo = (props: object | any) => {
  return (
    <div className={`todo ${props.background}`}>
      <div>{props.message}</div>
      <div className="buttonContainer">
        {props.background === "black" ? (
          <Button command={DONE} ident={props.ident} />
        ) : (
          ""
        )}
        <Button command={REMOVE} ident={props.ident} />
      </div>
    </div>
  );
};

export default Todo;
