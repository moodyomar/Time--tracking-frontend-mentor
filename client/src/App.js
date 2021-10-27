import './App.css';
import Dashboard from './comps/Dashboard';
import Login from './comps/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
