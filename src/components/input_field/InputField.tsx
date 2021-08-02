import Button from "../button/Button";
import {
  ADD_TODO,
  EMPTY_LIST,
  HIDE,
  REMOVE_LAST
} from "../../reducer/constants";
import { useState } from "react";
import Form from "../form/Form";

const InputField = () => {
  const [state, setState] = useState(<div></div>);
  return (
    <>
      <div className="buttonContainer">
        <button type="button" onClick={() => setState(<Form />)}>
          {ADD_TODO}
        </button>
        <button type="button" onClick={() => setState(<div></div>)}>
          {HIDE}
        </button>
        <Button command={REMOVE_LAST} />
        <Button command={EMPTY_LIST} />
      </div>
      {state}
    </>
  );
};
export default InputField;
