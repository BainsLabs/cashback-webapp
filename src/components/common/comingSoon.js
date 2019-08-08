import React from 'react';
import styled from 'styled-components';
//
const StyledDiv = styled.div`
  background-image: url(${props => props.imgSrc});
  background-size: cover;
  background-position: center center;
  width: inherit;
  height: ${props => props.height};
`;

export default (props) => {
  const { children } = props;
  return <StyledDiv {...props}>{children}</StyledDiv>;
};
