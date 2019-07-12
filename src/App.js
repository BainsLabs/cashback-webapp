import React from 'react';
import { withRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';
import Subscribe from 'components/common/Subscribe';
import Routes from 'Routes';

const App = (props) => {
  const { childProps } = props;
  return (
    <div className="App">
      <Navbar />
      <Routes childProps={childProps} />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default withRouter(App);
