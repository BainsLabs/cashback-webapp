import React from "react";
import { Row, Col } from "react-bootstrap";
// import classNames from 'classnames';
import styled from "styled-components";

const StyledDiv = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 10px;
  left: 2px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  &:hover {
    display: inline;
    opacity: 1;
  }
`;

export default props => {
  const { brandLogo, data } = props;
  return (
    <>
      <div className="card__container">
        <Row>
          <Col lg={4}>
            <p>{data.cahsback}</p>
            <p>{data.offerType}</p>
          </Col>
          <Col lg={4}>
            <p>{data.tlc}</p>
          </Col>
          <Col lg={4}>
            <img
              src={brandLogo}
              alt="KFC-LOGO"
              className="card__content-image"
            />
          </Col>
        </Row>
      </div>
      <StyledDiv>
        <Row>
          {/* <Col>
            <img src={brandLogo} alt="brandLogo" />
          </Col> */}
        </Row>
      </StyledDiv>
    </>
  );
};
