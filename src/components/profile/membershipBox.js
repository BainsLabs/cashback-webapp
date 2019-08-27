import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ComingSoon from "components/commingSoon";
import Moment from "moment";
import { FormattedMessage } from "react-intl";

const MemberShipBox = props => {
  const [open, modalOpen] = useState(false);
  const userprofile = props.user.userDetail.Items[0];
  const joindate = Moment(userprofile.createdAt).format("DD MMM, YYYY");
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Container className="profile__container">
              <h3>
                <FormattedMessage id="data.membership" />
              </h3>
              <Container className="membership__box text-center membership">
                <h6>
                  {userprofile.level === 0 ? (
                    "VIP"
                  ) : (
                    <FormattedMessage id="data.free" />
                  )}
                </h6>
                <FormattedMessage id="data.joiningd" />
                {userprofile.provider === "mtb" ? (
                  <h5> 14th, August 2019 </h5>
                ) : (
                  <h5>{joindate}</h5>
                )}
                <button
                  onClick={() => props.history.push("/refer-friend")}
                  className="freemembership"
                >
                  <FormattedMessage id="data.referfriend" />
                </button>
              </Container>
            </Container>
          </Col>
          <Col md={4}>
            <Container className="profile__container">
              <h3>
                <FormattedMessage id="data.vip" />
              </h3>
              <Container className="membership__box text-center membership">
                <FormattedMessage id="data.vipdate" />
                {userprofile.provider === "mtb" &&
                userprofile.status === "success" ? (
                  <h6>14th, August 2019</h6>
                ) : userprofile.provider === "6degrees" &&
                  userprofile.status === "success" ? (
                  <h6>{joindate}</h6>
                ) : (
                  <h6>-</h6>
                )}
                <FormattedMessage id="data.viprdate" />
                {userprofile.provider === "mtb" &&
                userprofile.status === "success" ? (
                  <h6>14th, August 2020</h6>
                ) : userprofile.provider === "6degrees" &&
                  userprofile.status === "success" ? (
                  <h6>
                    {Moment(joindate)
                      .add(1, "years")
                      .format("DD, MMM YYYY")}
                  </h6>
                ) : (
                  <h5>-</h5>
                )}
                {userprofile.level === 0 ? (
                  ""
                ) : (
                  <button
                    onClick={() => modalOpen(true)}
                    className="upgradeVIP"
                  >
                    <FormattedMessage id="data.vipupgrade" />
                  </button>
                )}
              </Container>
            </Container>
          </Col>
          <Col md={4}>
            <Container className="profile__container">
              <h3>
                <FormattedMessage id="data.tier" />
              </h3>
              <Container className="membership__box text-center membership">
                <h6>
                  <FormattedMessage id="data.vip" /> 5%{" "}
                  {userprofile.status === "success" ? (
                    <i className="fas fa-check-circle icon-color" />
                  ) : (
                    ""
                  )}
                </h6>
                <h6>
                  <FormattedMessage id="data.vip" /> 10%{" "}
                  {userprofile.status === "success" &&
                  userprofile.level === "2" ? (
                    <i className="fas fa-check-circle icon-color" />
                  ) : (
                    ""
                  )}
                </h6>
                <h6>
                  <FormattedMessage id="data.vip" /> 20%
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
                  <FormattedMessage id="data.footerVIPBENEFITS" />
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
