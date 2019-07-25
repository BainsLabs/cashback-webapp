import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { modalState } from 'redux/actions/modalActions';

const AuthenticatedRoute = ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('authenticated') ? <C {...props} {...cProps} /> : <Redirect to="/" />)
    }
  />
);

const mapDispatchToProps = {
  modalState,
};

export default connect(
  null,
  mapDispatchToProps,
)(AuthenticatedRoute);
