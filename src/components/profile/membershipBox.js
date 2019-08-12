import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import ComingSoon from "components/commingSoon";

const MemberShipBox = props => {
  const [open, modalOpen] = useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Container className="profile__container">
              <h3>MemberShip</h3>
              <Container className="membership__box text-center membership">
                <h6>FREE</h6>
                Joining Date
                <h5>12th, August 2019</h5>
                <button
                  onClick={() => props.history.push("/refer-friend")}
                  className="freemembership"
                >
                  Refer Friend
                </button>
              </Container>
            </Container>
          </Col>
          <Col md={4}>
            <Container className="profile__container">
              <h3>VIP</h3>
              <Container className="membership__box text-center membership">
                VIP Membership Date
                <h6>12th, August 2019</h6>
                VIP Membership Renewal Date
                <h5>12th, August 2020</h5>
                <button onClick={() => modalOpen(true)} className="upgradeVIP">
                  Upgrade to VIp today
                </button>
              </Container>
            </Container>
          </Col>
          <Col md={4}>
            <Container className="profile__container">
              <h3>VIP TIER</h3>
              <Container className="membership__box text-center membership">
                <h6>VIP 5%</h6>
                <h6>VIP 10%</h6>
                <h6>VIP 20%</h6>
                <button
                  onClick={() => props.history.push("/vip-benefits")}
                  className="savechanges"
                >
                  Vip Benefits
                </button>
              </Container>
            </Container>
          </Col>
        </Row>
        <ComingSoon open={open} onClose={() => modalOpen(false)} />
      </Container>
    </>
  );
};

export default withRouter(MemberShipBox);
