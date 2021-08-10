import "./App.scss";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import { reducer } from "./logic/reducer";
import { useReducer } from "react";
import { initialValue } from "./logic/state";
import { Context } from "./logic/state";

function App() {
  const [todos, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <Context.Provider value={{ todos, dispatch }}>
        <Header />
        <Container />
      </Context.Provider>
    </div>
  );
}

export default App;
