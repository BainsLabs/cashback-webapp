import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from 'components/LandingPage';
// import Login from 'containers/Login';
// import Signup from 'containers/Signup';
import NotFound from 'containers/NotFound';
import ContactUs from 'components/ContactUs';
import AppliedRoute from 'utils/AppliedRoute';
import UnauthenticatedRoute from 'utils/UnauthenticatedRoute';
import ReferFriend from 'components/ReferAFriend';

export default ({ childProps }) => (
  <Switch>
    {/* <AppliedRoute path="/" exact component={Navbar} props={childProps} /> */}
    <AppliedRoute path="/" exact component={LandingPage} props={childProps} />
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
    <UnauthenticatedRoute path="/contact" component={ContactUs} exact props={childProps} />
    <UnauthenticatedRoute path="/refer-friend" component={ReferFriend} exact props={childProps} />
    <Route component={NotFound} />
  </Switch>
);
