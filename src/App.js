const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("p", {}, animal),
    React.createElement("p", {}, breed),
  ]);
};

const App = () => {
  const petFeatures = [
    {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    },
    {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    },
    {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    },
  ];

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
