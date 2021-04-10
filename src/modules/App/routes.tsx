import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";
import Login from '../Login';
import WelcomePage from '../WelcomePage';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/welcome" component={WelcomePage}></Route>
        <Route path="/">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
