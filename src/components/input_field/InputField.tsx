import Button from "../button/Button";
import { ADD_TODO, EMPTY_LIST, REMOVE_LAST } from "../../reducer/constants";
import { useState } from "react";

const InputField = () => {
  const [state, setState] = useState("");

  return (
    <>
      <input
        placeholder="type your todo here"
        onChange={event => {
          event.preventDefault();
          setState(event.target.value);
        }}
      />

      <div className="buttonContainer">
        <Button command={ADD_TODO} payload={state} />
        <Button command={REMOVE_LAST} payload={state} />
        <Button command={EMPTY_LIST} payload={state} />
      </div>
    </>
  );
};
export default InputField;
