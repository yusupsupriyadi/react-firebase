import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Register from '../Register';
import Login from '../Login';
import Dashboard from '../Dashboard';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';

//TODO: APP
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
