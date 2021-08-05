import { useContext } from "react";
import { Context } from "../../logic/state";

const Container = () => {
  const { appState } = useContext(Context);

  return (
    <div className="container">
      <h5>All Your Todos Here</h5>
      {appState}
    </div>
  );
};

export default Container;
