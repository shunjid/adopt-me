import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchForm from "./components/SearchForm";
import Details from "./components/Details";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>

      <Router>
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
