import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import WelcomePage from '../WelcomePage';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route path="/Welcome" component={WelcomePage}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
        <Route path="/">
          <Redirect to="/SignIn"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
