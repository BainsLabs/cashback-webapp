import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import InnerLogo from 'static/icons-images/logo.png';
import MobileNav from './MobileNav';

const style = {
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
  bmMenuWrap: {
    width: '100%',
  },
};

const MobileNavBar = (props) => {
  console.log(props, 'propsssss');
  return (
    <Menu {...props} styles={style} right>
      <div className="text-center" style={style.outerStyle}>
        <img src={InnerLogo} alt="inner logo" style={style.InnerLogo} />
        <MobileNav {...props} />
      </div>
    </Menu>
  );
};

export default MobileNavBar;
