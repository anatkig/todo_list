import { useContext } from "react";
import { Context } from "../../App";

const Container = () => {
  const { appState } = useContext(Context);

  return (
    <div className="container">
      Main stuff here
      {appState}
    </div>
  );
};

export default Container;
