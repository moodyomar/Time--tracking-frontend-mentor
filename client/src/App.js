import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Todos from './pages/Todos';
import Calendar from './pages/Calendar';
import Register from './pages/Register';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path='/' component={Dashboard} />
        <Route path='/todos' component={Todos} />
        <Route path='/calendar' component={Calendar} />
        </Switch>
        <ToastContainer style={{color:'red'}} position="top-left" />
      </Router>
    </div>
  );
}

export default App;
