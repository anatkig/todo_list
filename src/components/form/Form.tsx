import { useState } from "react";
import { SUBMIT } from "../../reducer/constants";
import Button from "../button/Button";

const Form = () => {
  const [state, setState] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setState(event.target.inp.value);
    event.target.inp.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="inp" placeholder="type your todo here" />
      <Button type="Submit" command={SUBMIT} payload={state}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
