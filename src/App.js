import React, { useState } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import ThemeContext from "./theme/ThemeContext";

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div id="something-important">
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
