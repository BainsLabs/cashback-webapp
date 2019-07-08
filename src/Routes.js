import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from 'components/LandingPage';
// import Login from 'containers/Login';
// import Signup from 'containers/Signup';
import ContactUs from 'components/ContactUs';
import AppliedRoute from 'utils/AppliedRoute';
import UnauthenticatedRoute from 'utils/UnauthenticatedRoute';
import ReferFriend from 'components/ReferAFriend';
import Categories from 'components/CategoryPage';
import NotFound from 'containers/NotFound';

export default ({ childProps }) => (
  <Switch>
    {/* <AppliedRoute path="/" exact component={Navbar} props={childProps} /> */}
    <AppliedRoute path="/" exact component={LandingPage} props={childProps} />
    <UnauthenticatedRoute path="/categories" exact component={Categories} props={childProps} />

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
    <UnauthenticatedRoute path="/contact" exact component={ContactUs} props={childProps} />
    <UnauthenticatedRoute path="/refer-friend" exact component={ReferFriend} props={childProps} />
    {/* Finally, catch all unmatched routes */}

    <Route component={NotFound} />
  </Switch>
);
