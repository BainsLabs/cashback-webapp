import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
  width: 20rem;
  text-align: ${props => (props.textPosition ? props.textPosition : 'center')};
`;

export default props => (
  <StyledDiv {...props}>
    <div className="card">{props.children}</div>
  </StyledDiv>
);
