import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Login from './components/login';
import SignUp from './components/signUp';
import Nav from './components/nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;