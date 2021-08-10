import { useContext } from "react";
import { Context } from "../../logic/state";
import Todo from "../todo/Todo";

const Container = () => {
  const { todos } = useContext(Context);

  return (
    <div className="container">
      <h5>All Your Todos Here</h5>
      {todos.map(el => (
        <Todo
          type={el.type}
          message={el.message}
          key={el.key}
          ident={el.ident}
        />
      ))}
    </div>
  );
};

export default Container;
