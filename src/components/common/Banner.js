import React from 'react';
import styled from 'styled-components';
//
const StyledDiv = styled.div`
  background-image: url(${props => props.imgSrc});
  background-size: cover;
  background-position: center;
  text-align: ${props => (props.textPosition ? props.textPosition : 'left')};
  height: ${props => props.height};
`;

export default props => <StyledDiv {...props}>{props.children}</StyledDiv>;
