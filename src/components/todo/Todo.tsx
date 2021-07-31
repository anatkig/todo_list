import Button from "../button/Button";
import { DONE, REMOVE } from "../../reducer/constants";

const Todo = (props: object | any) => {
  return (
    <div className={props.background}>
      <div>{props.message}</div>
      <div className="buttonContainer">
        <Button command={DONE} ident={props.ident} />
        <Button command={REMOVE} ident={props.ident} />
      </div>
    </div>
  );
};

export default Todo;
