import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const MemberShip = () => (
  <>
    <Container className="profile__container text-center">
      <h3>
        <FormattedMessage id="data.managemeb" />
      </h3>
    </Container>
  </>
);

export default MemberShip;
