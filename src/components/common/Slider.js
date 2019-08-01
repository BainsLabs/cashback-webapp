import React from 'react';
import Component from '@reactions/component';
import { Waypoint } from 'react-waypoint';

const SliderSection = ({ children }) => (
  <Component initialState={{ isOpen: false }}>
    {({ setState }) => (
      <Waypoint
        bottomOffset={200}
        onEnter={() => setState({ isOpen: true })}
        onLeave={() => setState({ isOpen: true })}
        horizontal
      >
        {children}
      </Waypoint>
    )}
  </Component>
);

export default SliderSection;
