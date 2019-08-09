import React from 'react';
import { Container } from 'react-bootstrap';
import Profile from './profile';
import AccountSecurity from './accountsecurity';
import MemberShip from './membership';
import MemberShipBox from './membershipBox';

const ProfileContainer = () => (
  <>
    <Container>
      <Profile />
      <AccountSecurity />
      <MemberShip />
      <MemberShipBox />
    </Container>
  </>
);

export default ProfileContainer;
