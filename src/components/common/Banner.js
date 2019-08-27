import React from 'react';
import styled from 'styled-components';
//
const StyledDiv = styled.div`
  background-image: url(${props => props.imgSrc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: ${props => (props.position ? props.position : 'center top')};
  width: inherit;
  text-align: ${props => (props.textPosition ? props.textPosition : 'left')};
  height: ${props => (props.height ? props.height : '27vw')};
  position: relative;
`;

export default (props) => {
  const { children } = props;
  return <StyledDiv {...props}>{children}</StyledDiv>;
};
