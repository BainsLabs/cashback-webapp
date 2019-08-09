/* eslint-disable radix */
import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Input from 'components/common/inputField';
import Logo from 'static/images/login-signup/logo-icon(left).png';
import { totalTeam, teamByDegree } from 'utils/uitility';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import FriendShipTable from '../FriendShip/FriendShipTable';

class CalculatorForm extends Component {
  state = {
    monthlyspend: 50,
    friendsreferred: 5,
    avgcashback: 2,
    friendshibonus: 10,
    monthlyfriendshipbonus: '',
    totalteam: '',
    degreeTeam: [],
  };

  async componentDidMount() {
    this.onMaths();
  }

  onCalculate = async () => {
    const {
      monthlyspend, avgcashback, friendshibonus, totalteam, friendsreferred,
    } = this.state;
    const DegreeTeams = await teamByDegree(friendsreferred);
    if (monthlyspend && avgcashback && friendshibonus !== '') {
      const avgCash = avgcashback / 100;
      const bonus = friendshibonus / 100;
      const cashspent = monthlyspend;
      this.setState({
        monthlyfriendshipbonus: (totalteam * cashspent * avgCash * bonus).toFixed(2),
        degreeTeam: DegreeTeams,
      });
    }
  };

  onMaths = async () => {
    const { friendsreferred } = this.state;
    const teams = await totalTeam(friendsreferred);
    this.setState(
      {
        totalteam: teams,
      },
      () => this.onCalculate(),
    );
  };

  onHandleChange = async (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.onMaths(),
    );
  };

  render() {
    const {
      monthlyspend,
      friendsreferred,
      avgcashback,
      friendshibonus,
      monthlyfriendshipbonus,
      totalteam,
    } = this.state;
    const { intl } = this.props;
    return (
      <Container>
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
                  className="calculator__rfield"
                  value={monthlyfriendshipbonus}
                />
                <p>
                  <FormattedMessage id="data.calMonthly" />&nbsp;<i data-tip={intl.formatMessage({ id: 'data.monthlybonus' })} className="fas fa-info"/>
                </p>
                <ReactTooltip />
              </Col>
              <Col md={6} className="calculator__result">
                <Input disabled type="text" className="calculator__rfield" value={totalteam} />
                <p >
                  <FormattedMessage id="data.calTotalFriendShip" />&nbsp;<i data-tip={intl.formatMessage({ id: 'data.friendsTeam' })} className="fas fa-info"/>
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
                />
                <p className="fieldText" >
                  <FormattedMessage id="data.calMonthlySpend" />&nbsp;<i data-tip={intl.formatMessage({ id: 'data.monthlySpend' })} className="fas fa-info"/>
                </p>
                <ReactTooltip />
              </Col>
              <Col md={6}>
                <Input
                  type="text"
                  className="calculator__field"
                  name="friendsreferred"
                  onChange={this.onHandleChange}
                  value={friendsreferred}
                />
                <p
                  className="fieldText"

                >
                  <FormattedMessage id="data.calfriendsRefered" />&nbsp;<i data-tip={intl.formatMessage({ id: 'data.friendsReffered' })} className="fas fa-info"/>
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
                />
                <p className="fieldText" >
                  <FormattedMessage id="data.calAvgCB" />&nbsp;<i data-tip={intl.formatMessage({ id: 'data.avgCashback' })} className="fas fa-info"/>
                </p>
                <ReactTooltip />
              </Col>
              <Col md={6}>
                <Input
                  type="number"
                  className="calculator__field"
                  name="friendshibonus"
                  onChange={this.onHandleChange}
                  value={friendshibonus}
                />
                <p
                  className="fieldText"
                >
                  <FormattedMessage id="data.calFriendShipBonus" />&nbsp;<i data-tip={intl.formatMessage({ id: 'data.friendshipbonus' })} className="fas fa-info"/>
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
  intl: intlShape.isRequired,
};
export default injectIntl(CalculatorForm);
