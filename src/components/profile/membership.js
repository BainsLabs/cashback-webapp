import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputField from 'components/common/inputField';
import savingstatus from 'static/images/profile/SavingsStatus.png';
import maximize from 'static/images/profile/Maximize-Cash.png';
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
