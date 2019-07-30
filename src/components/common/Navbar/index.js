/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { sidebarState } from 'redux/actions/sidebarActions';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { modalState } from 'redux/actions/modalActions';
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
  const {
    user, sidebarState, sidebar, modalState,
  } = props;
  const authenticated = localStorage.getItem('authenticated');
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
              <Link to="/how-cashback-works" className="text-capitalize">
                <FormattedMessage id="data.menuHPcashbackworks" />
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/refer-friend">
                <FormattedMessage id="data.menuHPcapsrefer" />
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/vip-benefits">VIP Benifits</Link>
            </Nav.Item>
            {authenticated ? (
              <Nav.Item>
                <Link to="/my-earnings">
                  <FormattedMessage id="data.menuHPmyaccount" />
                </Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <button type="button" onClick={() => modalState('signin')} className="myaccount">
                  <FormattedMessage id="data.menuHPmyaccount" />
                </button>
              </Nav.Item>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

const mapDispatchToProps = {
  sidebarState,
  modalState,
};

const mapStateToProps = state => ({
  user: state.User,
  sidebar: state.Sidebar.open,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
