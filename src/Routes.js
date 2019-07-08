import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from 'components/LandingPage';
// import Login from 'containers/Login';
// import Signup from 'containers/Signup';
import NotFound from 'containers/NotFound';
import AppliedRoute from 'utils/AppliedRoute';
import UnauthenticatedRoute from 'utils/UnauthenticatedRoute';
import Categories from 'components/CategoryPage';

export default ({ childProps }) => (
  <Switch>
    {/* <AppliedRoute path="/" exact component={Navbar} props={childProps} /> */}
    <AppliedRoute path="/" exact component={LandingPage} props={childProps} />
    <UnauthenticatedRoute path="/categories" exact component={Categories} props={childProps} />
    <Route component={NotFound} />

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
  </Switch>
);
