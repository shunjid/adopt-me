import React from "react";
import ReactDOM from "react-dom";

import { Pet } from "./components/Pet";
import { petFeatures } from "./data";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    ...petFeatures.map((petFeature) => React.createElement(Pet, petFeature)),
  ]);
};

const render = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(React.createElement(App), rootElement);
};

render();
