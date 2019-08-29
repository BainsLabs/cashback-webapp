/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { sidebarState } from 'redux/actions/sidebarActions';
import {
  Navbar, Container, Nav, NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { modalState } from 'redux/actions/modalActions';
import DropdownComponent from 'components/common/DropDown';
import MobileNavBar from './Mobile/MobileNavbar';
import TopNavbar from './TopNavbar';
import secondaryNavbar from './secondaryNavbar';

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
    user, sidebarState, sidebar, modalState, intl,
  } = props;
  const language = localStorage.getItem('country');
  const authenticated = localStorage.getItem('authenticated');
  return (
    <>
      {/* <div className="mobile" style={style.buttonBackground}>
        <MobileNavBar Open={sidebar} closeMenu={sidebarState} />
      </div> */}
      <TopNavbar />
      {/* <secondaryNavbar /> */}
      <Navbar className="navbar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div
            className={language === 'en-US' ? 'container secondary__nav' : 'container chinese__nav'}
          >
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
                <Link to="/vip-benefits">
                  <FormattedMessage id="data.vipbenefits" />
                </Link>
              </Nav.Item>
              {authenticated ? (
                <Nav.Item>
                  <NavDropdown
                    className="dropdownnav"
                    title={intl.formatMessage({ id: 'data.menuHPmyaccount' })}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/profile">
                      <FormattedMessage id="data.myprofile" />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/my-wallet">
                      <FormattedMessage id="data.mywallet" />
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/my-earnings">
                      <FormattedMessage id="data.myearnings" />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/favourite-merchants">
                      <FormattedMessage id="data.favmerchants" />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/contact">
                      <FormattedMessage id="data.customercare" />
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <button type="button" onClick={() => modalState('signin')} className="myaccount">
                    <FormattedMessage id="data.menuHPmyaccount" />
                  </button>
                </Nav.Item>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

NavBar.propTypes = {
  intl: intlShape.isRequired,
};

const mapDispatchToProps = {
  sidebarState,
  modalState,
};

const mapStateToProps = state => ({
  user: state.User,
  sidebar: state.Sidebar.open,
});

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(NavBar),
);
