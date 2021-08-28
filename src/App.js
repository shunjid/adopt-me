import ReactDOM from "react-dom";

import { Pet } from "./components/Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Sudo" animal="Dog" breed="Havanese" />
    </div>
  );
};

const render = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

render();
