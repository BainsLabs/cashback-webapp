/* eslint-disable radix */
import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Input from "components/common/inputField";
import Logo from "static/images/login-signup/logo-icon(left).png";
import { totalTeam, teamByDegree } from "utils/uitility";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";
import ReactTooltip from "react-tooltip";
import FriendShipTable from "../FriendShip/FriendShipTable";

class CalculatorForm extends Component {
  state = {
    monthlyspend: 50,
    friendsreferred: 5,
    avgcashback: 2,
    friendshibonus: 10,
    monthlyfriendshipbonus: "",
    totalteam: "",
    degreeTeam: []
  };

  async componentDidMount() {
    this.onMaths();
  }

  onCalculate = async () => {
    const {
      monthlyspend,
      avgcashback,
      friendshibonus,
      totalteam,
      friendsreferred
    } = this.state;
    const DegreeTeams = await teamByDegree(friendsreferred);
    if (monthlyspend && avgcashback && friendshibonus !== "") {
      const avgCash = avgcashback / 100;
      const bonus = friendshibonus / 100;
      const cashspent = monthlyspend;
      this.setState({
        monthlyfriendshipbonus: (
          totalteam *
          cashspent *
          avgCash *
          bonus
        ).toFixed(2),
        degreeTeam: DegreeTeams
      });
    }
  };

  onMaths = async () => {
    const { friendsreferred } = this.state;
    const teams = await totalTeam(friendsreferred);
    this.setState(
      {
        totalteam: teams
      },
      () => this.onCalculate()
    );
  };

  onHandleChange = async e => {
    if(e.target.name==='avgcashback'){
      if(e.target.value<=10 && e.target.value >= 1 || e.target.value === ''){
        this.setState(
          {
            [e.target.name]: e.target.value
          },
          () => this.onMaths()
        )
      }
    }
    if(e.target.name === "monthlyspend" ){
      if(e.target.value<=100 && e.target.value >= 1 || e.target.value === ''){
        this.setState(
          {
            [e.target.name]: e.target.value
          },
          () => this.onMaths()
        )
      }
    }
    if(e.target.name === "friendshibonus"){
      this.setState(
        {
          [e.target.name]: e.target.value
        },
        () => this.onMaths()
      )
    }
    if(e.target.name === "friendsreferred" ){
      if(e.target.value <= 20 && e.target.value >= 2 || e.target.value === ''){
        this.setState(
          {
            [e.target.name]: e.target.value
          },
          () => this.onMaths()
        )
      }
    }
  };

  render() {
    const {
      monthlyspend,
      friendsreferred,
      avgcashback,
      friendshibonus,
      monthlyfriendshipbonus,
      totalteam
    } = this.state;
    const { intl } = this.props;
    return (
      <Container className="no-padding">
        <Row>
          <Col className="calculator__container">
            <Row>
              <Col>
                <h2 className="text-center calculator-heading">
                  <FormattedMessage id="data.calHeading" />
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="calculator__result">
                <Input
                  disabled
                  type="number"
                  className="calculator__rfield text-center"
                  value={monthlyfriendshipbonus}
                />
                <p>
                  <FormattedMessage id="data.calMonthly" />
                  &nbsp;(&nbsp;
                  <i
                    data-tip={intl.formatMessage({ id: "data.monthlybonus" })}
                    className="fas fa-info"
                  />
                  &nbsp;)
                </p>
                <ReactTooltip />
              </Col>

              <Col md={6} className="calculator__result">
                <Input
                  disabled
                  type="text"
                  className="calculator__rfield text-center"
                  value={totalteam || 0}
                />
                <p>
                  <FormattedMessage id="data.calTotalFriendShip" />
                  &nbsp;(&nbsp;
                  <i
                    data-tip={intl.formatMessage({ id: "data.friendsTeam" })}
                    className="fas fa-info"
                  />
                  &nbsp;)
                </p>
                <ReactTooltip />
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={6}>
                <Input
                  type="number"
                  className="calculator__field"
                  name="monthlyspend"
                  onChange={this.onHandleChange}
                  value={monthlyspend}
                  min="1"
                  max="100"
                />
                <p className="fieldText">
                  <FormattedMessage id="data.calMonthlySpend" />
                  &nbsp;(&nbsp;
                  <i
                    data-tip={intl.formatMessage({ id: "data.monthlySpend" })}
                    className="fas fa-info"
                  />
                  &nbsp;)
                </p>
                <ReactTooltip />
              </Col>
              <Col md={6}>
                <Input
                  type="number"
                  className="calculator__field"
                  name="friendsreferred"
                  onChange={this.onHandleChange}
                  value={friendsreferred}
                  min="2"
                  max="20"
                />
                <p className="fieldText">
                  <FormattedMessage id="data.calfriendsRefered" />
                  &nbsp;(&nbsp;
                  <i
                    data-tip={intl.formatMessage({
                      id: "data.friendsReffered"
                    })}
                    className="fas fa-info"
                  />
                  &nbsp;)
                </p>
                <ReactTooltip />
              </Col>
            </Row>

            <Row className="text-center">
              <Col md={6}>
                <Input
                  type="number"
                  className="calculator__field"
                  name="avgcashback"
                  onChange={this.onHandleChange}
                  value={avgcashback}
                  min="1"
                  max="10"
                />
                <p className="fieldText">
                  <FormattedMessage id="data.calAvgCB" />
                  &nbsp;(&nbsp;
                  <i
                    data-tip={intl.formatMessage({ id: "data.avgCashback" })}
                    className="fas fa-info"
                  />
                  &nbsp;)
                </p>
                <ReactTooltip />
              </Col>
              <Col md={6}>
                {/* <Input
                  type="number"
                  className="calculator__field"
                  name="friendshibonus"
                  onChange={this.onHandleChange}
                  value={friendshibonus}
                /> */}
                <select name="friendshibonus" onChange={this.onHandleChange}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
                <p className="fieldText">
                  <FormattedMessage id="data.calFriendShipBonus" />
                  &nbsp;(&nbsp;
                  <i
                    data-tip={intl.formatMessage({
                      id: "data.friendshipbonus"
                    })}
                    className="fas fa-info"
                  />
                  &nbsp;)
                </p>
                <ReactTooltip />
              </Col>
            </Row>
          </Col>
          {/* <Col md={6}>
            <FriendShipTable className="calculator__table" degreeTeam={degreeTeam} />
          </Col> */}
        </Row>
      </Container>
    );
  }
}
CalculatorForm.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(CalculatorForm);
