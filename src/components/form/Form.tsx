import React from "react";
import { useContext, useState } from "react";
import { SUBMIT, HIDDEN, UNHIDDEN } from "../../logic/constants";
import Button from "../button/Button";
import { Context } from "../../logic/state";
import PopUp from "./PopUp";

const Form = () => {
  const { dispatch } = useContext(Context);
  const [state, setState] = useState(HIDDEN);
  const [inputValue, setValue] = useState("");

  const handleSubmit = () => {
    if (inputValue === "") setState(UNHIDDEN);
    else {
      setState(HIDDEN);
      dispatch({
        type: SUBMIT,
        message: inputValue,
        key: 0,
        ident: 0,
      });
    }
    setValue("");
  };

  return (
    <form>
      <PopUp visibility={state} />
      <input
        className="input"
        type="text"
        value={inputValue}
        placeholder="type your todo here"
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <Button command={SUBMIT} text={SUBMIT} onClick={handleSubmit}></Button>
    </form>
  );
};

export default Form;
