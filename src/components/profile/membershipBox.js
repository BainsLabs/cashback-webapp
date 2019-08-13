import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ComingSoon from "components/commingSoon";
import Moment from "moment";

const MemberShipBox = props => {
  const [open, modalOpen] = useState(false);
  let userprofile = props.user.userDetail.Items[0];
  let joindate = Moment(userprofile.createdAt).format("DD MMM, YYYY");
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
                {userprofile.provider === "mtb" ? (
                  <h5> 14th, August 2019 </h5>
                ) : (
                  <h5>{joindate}</h5>
                )}
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
                {userprofile.provider === "mtb" &&
                userprofile.status === "success" ? (
                  <h6>14th, August 2019</h6>
                ) : userprofile.provider === "6degrees" &&
                  userprofile.status === "success" ? (
                  <h6>{joindate}</h6>
                ) : (
                  <h6>-</h6>
                )}
                VIP Membership Renewal Date
                {userprofile.provider === "mtb" && userprofile.status === "success" ? (
                  <h5>14th, August 2020</h5>
                ) :userprofile.provider === "6degrees" &&
                userprofile.status === "success" ? (
                  <h5>
                    {Moment(joindate)
                      .add(1, "years")
                      .format("DD, MMM YYYY")}
                  </h5>
                ): <h5>-</h5>}
                <button onClick={() => modalOpen(true)} className="upgradeVIP">
                  Upgrade to VIP today
                </button>
              </Container>
            </Container>
          </Col>
          <Col md={4}>
            <Container className="profile__container">
              <h3>VIP TIER</h3>
              <Container className="membership__box text-center membership">
                <h6>
                  VIP 5%{" "}
                  {userprofile.status === "success" ? (
                    <i className="fas fa-check-circle icon-color" />
                  ) : (
                    ""
                  )}
                </h6>
                <h6>
                  VIP 10%{" "}
                  {userprofile.status === "success" &&
                  userprofile.level === "2" ? (
                    <i className="fas fa-check-circle icon-color" />
                  ) : (
                    ""
                  )}
                </h6>
                <h6>
                  VIP 20%
                  {/* {userprofile.status === "success" &&
                  userprofile.level === "3" ? (
                    <i class="fas fa-check-circle" />
                  ) : (
                    ""
                  )} */}
                </h6>
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

const mapStateToProps = state => ({
  user: state.User
});

export default withRouter(connect(mapStateToProps)(MemberShipBox));
