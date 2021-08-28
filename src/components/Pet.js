import React from "react";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("p", {}, animal),
    React.createElement("p", {}, breed),
  ]);
};

export { Pet };
