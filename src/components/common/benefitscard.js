import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : '#ffb422'};
  width: inherit
  color: ${props =>
    props.color ? props.color : '#000'};
  padding: 2rem
  margin-top: 3rem
  margin-left: 2rem
  border-radius: 1.2rem
  outline: 1px dashed #fff;
  outline-offset: -12px;
`;

export default props => (
  <StyledDiv {...props}>
    <div className="benefits">{props.children}</div>
  </StyledDiv>
);
