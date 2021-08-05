import Button from "../button/Button";
import { ADD_TODO, EMPTY_LIST, HIDE, REMOVE_LAST } from "../../logic/constants";
import { useState } from "react";
import Form from "../form/Form";

const Header = () => {
  const [state, setState] = useState(<div></div>);
  return (
    <>
      <div className="header">
        <h3>Todo List</h3>
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
      </div>
    </>
  );
};

export default Header;
