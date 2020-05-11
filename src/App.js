import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from './pages/signup';
import Signin from './pages/signin';
import Page404 from './pages/page404';
import Home from './pages/home';
import User from './pages/user';

import {AuthProvider} from './Auth';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
        <PrivateRoute path="/user" component={User} />
          <Route exact path="/" component={Home} />

          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />

          <Route component={Page404} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
