import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import SearchForm from "./components/SearchForm";
import Details from "./components/Details";

const App = () => {
  return (
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
  );
};

export default App;
