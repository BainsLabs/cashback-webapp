import React from "react";
import { Container } from "react-bootstrap";
import Profile from "./profile";
import AccountSecurity from "./accountsecurity";
import MemberShip from "./membership";
import MemberShipBox from "./membershipBox";
import Banner from "components/common/Banner";
import BannerImage from "static/images/profile/banner-img.jpg";
import { FormattedMessage } from "react-intl";

const ProfileContainer = () => (
  <>
    <Banner
      imgSrc={BannerImage}
      className="banner-padding"
      textPosition="center"
    >
      <h3 className="vipbanner-text">
        <FormattedMessage id="data.myProfile" />
      </h3>
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
