import "./App.scss";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import React from "react";
import { reducer, action } from "./reducer/reducer";
import { useReducer } from "react";

const initialValue = [] as JSX.Element[];
export const Context = React.createContext({
  appState: [] as JSX.Element[],
  dispatch: {} as React.Dispatch<action>
});

function App() {
  const [appState, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <Context.Provider value={{ appState, dispatch }}>
        <Header />
        <Container />
      </Context.Provider>
    </div>
  );
}

export default App;
