import React from 'react';
import { Container } from 'react-bootstrap';
import { cloudfrontUrl } from 'utils/uitility';
import Banner from 'components/common/Banner';
import { FormattedMessage } from 'react-intl';
import Profile from './profile';
import AccountSecurity from './accountsecurity';
import MemberShip from './membership';
import MemberShipBox from './membershipBox';

const ProfileContainer = () => (
  <>
    <Banner imgSrc={cloudfrontUrl('images/profile/banner-img.jpg')} textPosition="center">
      <h2 className="vipbanner-text">
        <FormattedMessage id="data.myProfile" />
      </h2>
    </Banner>
    <Container>
      <Profile />
      <AccountSecurity />
      <MemberShip />
      <MemberShipBox />
    </Container>
  </>
);

export default ProfileContainer;
