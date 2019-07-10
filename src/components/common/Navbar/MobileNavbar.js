import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const style = {
  bmMenu: {
    background: '#272F3A',
    color: 'white',
  },
};

const MobileNavBar = (props) => {
  return (
    <>
      <Menu {...props} styles={style} right>
        {/* <MenuContent closeCallback={this.closeMenu.bind(this)} /> */}
        <h1>Mobile Menu</h1>
      </Menu>
    </>
  );
};

export default MobileNavBar;
