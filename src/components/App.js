import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Substation from '../pages/Substation';
import Dashboard from '../pages/Dashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/dashboard"/>}/>
        <Route path="/substation/:substation" >
          <Substation />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
