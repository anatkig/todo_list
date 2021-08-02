import { useContext } from "react";
import { Context } from "../../App";

const Container = () => {
  const { appState } = useContext(Context);

  return (
    <div className="container">
      All Your Todos Here
      {appState}
    </div>
  );
};

export default Container;
