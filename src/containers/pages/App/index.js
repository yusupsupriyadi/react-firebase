import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from '../Register';
import Login from '../Login';
import Dashboard from '../Dashboard';


//TODO: INDEX 
function App() {
  return (
    <div>
      <Router>
        <div>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </div>
      </Router>
      </div>
  );
}

export default App;
