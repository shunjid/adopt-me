import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";

import SearchForm from "./components/SearchForm";
import Details from "./components/Details";
import ThemeContext from "./contexts/ThemeContext";

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchForm />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
