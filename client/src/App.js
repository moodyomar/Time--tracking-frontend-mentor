import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Todos from './pages/Todos';
import Calendar from './pages/Calendar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/todos' component={Todos} />
        <Route path='/calendar' component={Calendar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
