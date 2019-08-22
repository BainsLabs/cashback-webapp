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
import LoadingOverlay from 'react-loading-overlay';
import ScaleLoader from 'react-spinners/ScaleLoader';

class App extends Component {
  state = {
    isLoader: false,
  };

  componentWillMount() {
    localStorage.setItem('country', 'en-US');
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
const mapDispatchToProps = {
  getContent,
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(App),
);
