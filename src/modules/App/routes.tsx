import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";
import ShowData from '../ShowData';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Dashboard from '../Dashboard';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route path="/Dashboard" component={Dashboard}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
        <Route path="/Data" component={ShowData}></Route>
        <Route path="/">
          <Redirect to="/SignIn"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
