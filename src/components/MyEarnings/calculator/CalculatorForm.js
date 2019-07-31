/* eslint-disable radix */
import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Input from 'components/common/inputField';
import Logo from 'static/images/login-signup/logo-icon(left).png';
import { totalTeam } from 'utils/uitility';
import _ from 'lodash';

class CalculatorForm extends Component {
  state = {
    monthlyspend: '',
    friendsreferred: '',
    avgcashback: '',
    friendshibonus: '',
    monthlyfriendshipbonus: '',
    totalteam: 0,
  };

  onHandleChange = async (e) => {
    const {
      monthlyspend, avgcashback, friendshibonus, totalteam,
    } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'friendsreferred') {
      const teams = await totalTeam(e.target.value);

      this.setState({
        totalteam: teams,
      });
    }
    if (monthlyspend && avgcashback && friendshibonus !== '') {
      const avgCash = avgcashback / 100;
      const bonus = friendshibonus / 100;
      const cashspent = parseInt(monthlyspend);
      this.setState({
        monthlyfriendshipbonus: totalteam * cashspent * avgCash * bonus,
      });
    }
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
    return (
      <Container>
        <Row>
          <Col md={2}>
            <img src={Logo} alt="modal-logo" className="calculator__logo" />
          </Col>
          <Col md={8}>
            <h2 className="text-center calculator-heading">Earning Calculator</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="calculator__result">
            <Input
              disabled
              type="text"
              className="calculator__rfield"
              value={monthlyfriendshipbonus}
            />
            <p>Monthly Friendship Bonus</p>
          </Col>
          <Col md={6} className="calculator__result">
            <Input disabled type="text" className="calculator__rfield" value={totalteam} />
            <p>Total Friendship Team</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={3}>
            <Input
              type="text"
              className="calculator__field"
              name="monthlyspend"
              onChange={this.onHandleChange}
              value={monthlyspend}
            />
            <p className="fieldText">Monthly Spend</p>
          </Col>
          <Col md={3}>
            <Input
              type="text"
              className="calculator__field"
              name="friendsreferred"
              onChange={this.onHandleChange}
              value={friendsreferred}
            />
            <p className="fieldText">Friends Referred</p>
          </Col>
          <Col md={3}>
            <Input
              type="text"
              className="calculator__field"
              name="avgcashback"
              onChange={this.onHandleChange}
              value={avgcashback}
            />
            <p className="fieldText">Average Cash back</p>
          </Col>
          <Col md={3}>
            <Input
              type="text"
              className="calculator__field"
              name="friendshibonus"
              onChange={this.onHandleChange}
              value={friendshibonus}
            />
            <p className="fieldText">Friendship Bonus Tier</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <button type="button" className="calbutton">
              Calculate
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CalculatorForm;
