import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: ${props => (props.backgroundColor ? props.backgroundColor : '#ffb422')};
  color: ${props => (props.color ? props.color : '#000')};
  padding: 1rem;
  margin-top: 3rem;
  margin-left: ${props => props.marginLeft};
`;

export default (props) => {
  const { children } = props;
  return (
    <StyledDiv {...props}>
      <div {...props}>{children}</div>
    </StyledDiv>
  );
};
