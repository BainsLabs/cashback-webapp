import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNavbar from 'components/common/Navbar/TopNavbar';
import Home from 'containers/Home';
// import Login from 'containers/Login';
// import Signup from 'containers/Signup';
import NotFound from 'containers/NotFound';
import AppliedRoute from 'utils/AppliedRoute';
import UnauthenticatedRoute from 'utils/UnauthenticatedRoute';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={TopNavbar} props={childProps} />
    {/* <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={Signup}
      props={childProps}
    /> */}
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
