/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { sidebarState } from 'redux/actions/sidebarActions';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import MobileNavBar from './Mobile/MobileNavbar';
import TopNavbar from './TopNavbar';

const style = {
  buttonBackground: {
    background: '#272F3A',
    width: '100%',
    height: '3rem',
    padding: '0.5rem 0rem',
  },
};

const NavBar = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { user, sidebarState, sidebar } = props;
  return (
    <>
      <div className="mobile" style={style.buttonBackground}>
        <MobileNavBar Open={sidebar} closeMenu={sidebarState} />
      </div>
      <TopNavbar />
      <Navbar className="navbar" expand="lg">
        <Container>
          <Nav className="navbar__list">
            <Nav.Item>
              <Link to="/categories">
                <FormattedMessage id="data.menuHPshopcategories" />
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/how-cashback-works">How Cashback Works</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/refer-friend">
                <FormattedMessage id="data.menuHPcapsrefer" />
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/categories">VIP Benifits</Link>
            </Nav.Item>
            {user.authenticated ? (
              <Nav.Item>
                <Link to="/categories">My Account</Link>
              </Nav.Item>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

const mapDispatchToProps = {
  sidebarState,
};

const mapStateToProps = state => ({
  user: state.User,
  sidebar: state.Sidebar.open,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
