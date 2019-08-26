/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';
import Subscribe from 'components/common/Subscribe';
import Routes from 'Routes';
import { connect } from 'react-redux';
import { getContent } from 'redux/actions/contentActions';
import '@material/react-snackbar/dist/snackbar.css';
import { getUserName, getUserEmail } from 'redux/actions/signupActions';
import { modalState } from 'redux/actions/modalActions';

class App extends Component {
  state = {
    isLoader: false,
  };

  async componentWillMount() {
    // const testingDomain = 'https://michelle.6degrees.cash';
    if (localStorage.getItem('country') === 'en-US' || localStorage.getItem('country') === null) {
      localStorage.setItem('country', 'en-US');
    } else {
      localStorage.getItem('country', 'zh-CN');
    }
    const { getUserName, modalState, user, getUserEmail } = this.props;
    const params = {
      username: window.location.href
        .split('.')[0]
        .split('//')[1]
        .toLowerCase(),
      checkType: 'getUserEmail',
    };
    let userDetails = await getUserEmail(params);
    if (window.location.href.split('.')[0].split('//')[1] !== 'test') {
      const username = userDetails.Items[0].username;
      console.log(username,"usernameeeeee")
      if (window.location.href.split('.')[0].split('//')[1] !== localStorage.getItem('username')) {
        window.location = 'https://test.6degrees.cash';
        return;
      }
      const params = {
        username: window.location.href
          .split('.')[0]
          .split('//')[1]
          .toLowerCase(),
        checkType: 'getUserEmail',
      };
      const user = await getUserName(params);
      if (user.Count === 0) {
        window.location = 'https://test.6degrees.cash';
        return;
      }
      await modalState('signup');
    }
    window.scrollTo(0, 0);

    // localStorage.setItem('country', 'en-US');
  }

  async componentDidMount() {
    this.setState({
      isLoader: true,
    });
    const { getContent } = this.props;
    const params = {
      lang: 'en',
    };
    await getContent(params);
    this.setState({
      isLoader: false,
    });
  }

  render() {
    const { childProps } = this.props;
    const { isLoader } = this.state;
    return (
      // <LoadingOverlay active={isLoader} spinner={<ScaleLoader />} text="Loading your content...">
      <div className="App">
        <Navbar />
        <Routes childProps={childProps} />
        <Subscribe />
        <Footer />
      </div>
      // </LoadingOverlay>
    );
  }
}

const mapStateToProps = state => ({
  user: state.User,
});

const mapDispatchToProps = {
  getContent,
  getUserName,
  modalState,
  getUserEmail
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
