import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const StyledDiv = styled.div`
  background: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  text-align: ${props => (props.textPosition ? props.textPosition : 'center')};
`;

export default (props) => {
  const { classValue, border, children } = props;
  return (
    <StyledDiv {...props}>
      <div
        className={classNames(classValue || 'card', {
          cardBorder: border,
        })}
      >
        {children}
      </div>
    </StyledDiv>
  );
};
