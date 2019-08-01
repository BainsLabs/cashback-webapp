/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import InnerLogo from 'static/icons-images/logo.png';
import MobileLogo from 'static/icons-images/logo-icon.png';
import { withRouter, Link } from 'react-router-dom';
import MobileNav from './MobileNav';

const style = {
  bmBurgerButton: {
    width: '2rem',
    height: '2rem',
    marginLeft: '1rem',
    // float: 'right',
    position: 'fixed',
  },
  bmMenu: {
    background: '#272F3A',
    color: 'white',
  },
  InnerLogo: {
    height: '3rem',
    marginTop: '1rem',
  },
  outerStyle: {
    outline: 'none',
  },
  bmOverlay: {
    // width: 'none',
  },
};

const MobileNavBar = (props) => {
  return (
    <Menu
      customBurgerIcon={<img src={MobileLogo} alt="mobile__logo" />}
      {...props}
      styles={style}
      left
    >
      <div className="text-center" style={style.outerStyle}>
        <Link to="/">
          <img src={InnerLogo} alt="inner logo" style={style.InnerLogo} />
        </Link>
        <MobileNav {...props} />
      </div>
    </Menu>
  );
};

export default withRouter(MobileNavBar);
