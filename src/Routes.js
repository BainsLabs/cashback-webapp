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
import HowCashbackWorks from 'components/HowCashBackWork';
import TermsndConditions from 'components/TermsndConditions';
import MyEarnings from 'components/MyEarnings';

export default ({ childProps }) => (
  <Switch>
    {/* <AppliedRoute path="/" exact component={Navbar} props={childProps} /> */}
    <AppliedRoute path="/" exact component={LandingPage} props={childProps} />
    <Route path="/categories" exact component={Categories} props={childProps} />

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
    <Route path="/contact" exact component={ContactUs} props={childProps} />
    <Route path="/refer-friend" exact component={ReferFriend} props={childProps} />
    <Route path="/how-cashback-works" exact component={HowCashbackWorks} props={childProps} />
    <Route path="/terms-conditions" exact component={TermsndConditions} props={childProps} />
    <Route path="/my-earnings" exact component={MyEarnings} props={childProps} />

    {/* Finally, catch all unmatched routes */}

    <Route component={NotFound} />
  </Switch>
);
