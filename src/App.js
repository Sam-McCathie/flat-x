import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Pages
import home from "./components/pages/home/home";
import login from "./components/pages/login/login";
import register from "./components/pages/register/register";
import dashboard from "./components/pages/dashboard/dashboard";
import roster from "./components/pages/roster/roster";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/login" exact component={login} />
        <Route path="/register" exact component={register} />
        <Route path="/dashboard" exact component={dashboard} />
        <Route path="/roster" exact component={roster} />
      </Switch>
    </Router>
  );
}

export default App;
