import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Registerpage from "./components/Registerpage";
import List from "./components/List";
import Loginpage from "./components/Loginpage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Loginpage />
          </Route>
          <Route exact path="/register">
            <Registerpage />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
