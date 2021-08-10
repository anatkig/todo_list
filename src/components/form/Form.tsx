import { useContext, useState } from "react";
import { SUBMIT, HIDDEN, UNHIDDEN } from "../../logic/constants";
import Button from "../button/Button";
import { Context } from "../../logic/state";
import PopUp from "./PopUp";

const Form = () => {
  const { dispatch } = useContext(Context);
  const [state, setState] = useState(HIDDEN);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!event.target.inp.value) setState(UNHIDDEN);
    else {
      setState(HIDDEN);
      dispatch({
        type: SUBMIT,
        message: event.target.inp.value,
        key: 0,
        ident: 0,
      });
    }
    event.target.inp.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <PopUp visibility={state} />
      <input
        className="input"
        type="text"
        name="inp"
        placeholder="type your todo here"
      />
      <Button command={SUBMIT} text={SUBMIT}></Button>
    </form>
  );
};

export default Form;
