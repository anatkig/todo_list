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
        payload: event.target.inp.value,
        ident: 0
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
      <Button command={SUBMIT}>Submit</Button>
    </form>
  );
};

export default Form;
