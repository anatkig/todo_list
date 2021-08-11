import Button from "../button/Button";
import { ADD_TODO, EMPTY_LIST, HIDE, REMOVE_LAST } from "../../logic/constants";
import { useState } from "react";
import Form from "../form/Form";
import { Context } from "../../logic/state";
import React, { useContext } from "react";

const Header = () => {
  const [state, setState] = useState(<div></div>);
  const { dispatch } = useContext(Context);

  const handleClick = (event: any) => {
    if (
      event.target.closest("button") &&
      (event.target.closest("button").textContent === REMOVE_LAST ||
        event.target.closest("button").textContent === EMPTY_LIST)
    ) {
      event.preventDefault();
      event.stopPropagation();
      dispatch({
        type: event.target.closest("button").textContent,
        message: "",
        key: 0,
        ident: 0,
      });
    }
  };

  return (
    <>
      <div className="header">
        <h3>Todo List</h3>
        <div className="buttonContainer" onClick={handleClick}>
          <button type="button" onClick={() => setState(<Form />)}>
            {ADD_TODO}
          </button>
          <button type="button" onClick={() => setState(<div></div>)}>
            {HIDE}
          </button>

          <Button command={REMOVE_LAST} text={REMOVE_LAST} />
          <Button command={EMPTY_LIST} text={EMPTY_LIST} />
        </div>
        {state}
      </div>
    </>
  );
};

export default Header;
