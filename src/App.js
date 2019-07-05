import React, { Component, Fragment } from 'react';
import { Auth } from 'aws-amplify';
import { Link, withRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';
import Subscribe from 'components/common/Subscribe';
import Routes from 'Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    } catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);

    this.props.history.push('/login');
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App">
        <Navbar />
        <Routes childProps={childProps} />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
