import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: ${props => (props.backgroundColor ? props.backgroundColor : '#ffb422')};
  width: inherit;
  color: ${props => (props.color ? props.color : '#000')};
  padding: 1rem;
  margin-top: 3rem;
  margin-left: 2rem;
`;

export default (props) => {
  const { children } = props;
  return (
    <StyledDiv {...props}>
      <div className="benefits">{children}</div>
    </StyledDiv>
  );
};
