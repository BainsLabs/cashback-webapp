/* eslint-disable radix */
import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Input from 'components/common/inputField';
import { totalTeam, teamByDegree } from 'utils/uitility';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import ReactTooltip from 'react-tooltip';

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

  onIncrement = (fieldname) => {
    const { monthlyspend, friendsreferred, avgcashback, friendshibonus } = this.state;
    switch (fieldname) {
      case 'monthlyspend':
        if (monthlyspend < 100 || monthlyspend === '') {
          this.setState(
            {
              monthlyspend: monthlyspend + 1,
            },
            () => this.onMaths(),
          );
        }
        break;
      case 'friendsreferred':
        if (friendsreferred < 20 || friendsreferred === '') {
          this.setState(
            {
              friendsreferred: friendsreferred + 1,
            },
            () => this.onMaths(),
          );
        }
        break;
      case 'avgcashback':
        if (avgcashback < 20 || avgcashback === '') {
          this.setState(
            {
              avgcashback: avgcashback + 1,
            },
            () => this.onMaths(),
          );
        }
        break;
        case 'friendshibonus':
          if (friendshibonus == 5) {
            this.setState(
              {
                friendshibonus: friendshibonus + 5,
              },
              () => this.onMaths(),
            );
          }
          if (friendshibonus == 10) {
            this.setState(
              {
                friendshibonus: friendshibonus + 10,
              },
              () => this.onMaths(),
            );
          }
          break;
      default:
        break;
    }
  };

  onDecrement = (fieldname) => {
    const { monthlyspend, friendsreferred, avgcashback, friendshibonus } = this.state;
    switch (fieldname) {
      case 'monthlyspend':
        if (monthlyspend > 0 || monthlyspend === '') {
          this.setState(
            {
              monthlyspend: monthlyspend - 1,
            },
            () => this.onMaths(),
          );
        }
        break;
      case 'friendsreferred':
        if (friendsreferred > 0 || friendsreferred === '') {
          this.setState(
            {
              friendsreferred: friendsreferred - 1,
            },
            () => this.onMaths(),
          );
        }
        break;
      case 'avgcashback':
        if (avgcashback > 0 || avgcashback === '') {
          this.setState(
            {
              avgcashback: avgcashback - 1,
            },
            () => this.onMaths(),
          );
        }
        break;
      case 'friendshibonus':
        if (friendshibonus == 10) {
          this.setState(
            {
              friendshibonus: friendshibonus - 5,
            },
            () => this.onMaths(),
          );
        }
        if (friendshibonus == 20) {
          this.setState(
            {
              friendshibonus: friendshibonus - 10,
            },
            () => this.onMaths(),
          );
        }
        break;
      default:
        break;
    }
  };

  onHandleChange = async (e) => {
    if (e.target.name === 'avgcashback') {
      if ((e.target.value <= 10 && e.target.value >= 1) || e.target.value === '') {
        this.setState(
          {
            [e.target.name]: e.target.value,
          },
          () => this.onMaths(),
        );
      }
    }
    if (e.target.name === 'monthlyspend') {
      if ((e.target.value <= 100 && e.target.value >= 1) || e.target.value === '') {
        this.setState(
          {
            [e.target.name]: e.target.value,
          },
          () => this.onMaths(),
        );
      }
    }
    if (e.target.name === 'friendshibonus') {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => this.onMaths(),
      );
    }
    if (e.target.name === 'friendsreferred') {
      if ((e.target.value <= 20 && e.target.value >= 2) || e.target.value === '') {
        this.setState(
          {
            [e.target.name]: e.target.value,
          },
          () => this.onMaths(),
        );
      }
    }
  };

  decimalCheck = (event) => {
    return event.charCode >= 48 && event.charCode <= 57;
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
                  // type="number"
                  className="calculator__rfield text-center"
                  value={monthlyfriendshipbonus}
                />

                <p>
                  <FormattedMessage id="data.calMonthly" />
                &nbsp;
                  <i
                    data-tip={intl.formatMessage({ id: 'data.monthlybonus' })}
                    className="fas fa-info-circle"
                  />
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
                  &nbsp;
                  <i
                    data-tip={intl.formatMessage({ id: 'data.friendsTeam' })}
                    className="fas fa-info-circle"
                  />
                </p>
                <ReactTooltip />
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={6}>
                <Row>
                  <Col md={2} xs={2} className="text-right ">
                    <button
                      onClick={() => this.onDecrement('monthlyspend')}
                      className="cal__button"
                    >
                      <i className="fas fa-minus" />
                    </button>
                  </Col>
                  <Col md={8} xs={8}>
                    <Input
                      type="number"
                      className="calculator__field"
                      name="monthlyspend"
                      onChange={this.onHandleChange}
                      value={monthlyspend}
                      readOnly
                      // max="100"
                    />
                  </Col>
                  <Col md={2} xs={2} className="text-left ">
                    <button
                      onClick={() => this.onIncrement('monthlyspend')}
                      className="cal__button"
                    >
                      <i className="fas fa-plus" />
                    </button>
                  </Col>
                </Row>
                <p className="fieldText">
                  <FormattedMessage id="data.calMonthlySpend" />
                  &nbsp;
                  <i
                    data-tip={intl.formatMessage({ id: 'data.monthlySpend' })}
                    className="fas fa-info-circle"
                  />
                </p>
                <ReactTooltip />
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={2} xs={2} className="text-right ">
                    <button
                      onClick={() => this.onDecrement('friendsreferred')}
                      className="cal__button"
                    >
                      <i className="fas fa-minus" />
                    </button>
                  </Col>
                  <Col md={8} xs={8}>
                    <Input
                      type="number"
                      className="calculator__field"
                      name="friendsreferred"
                      onChange={this.onHandleChange}
                      value={friendsreferred}
                      readOnly
                      // min="2"
                      // max="20"
                    />
                  </Col>
                  <Col md={2} xs={2} className="text-left ">
                    <button
                      onClick={() => this.onIncrement('friendsreferred')}
                      className="cal__button"
                    >
                      <i className="fas fa-plus" />
                    </button>
                  </Col>
                </Row>
                <p className="fieldText">
                  <FormattedMessage id="data.calfriendsRefered" />
                  &nbsp;
                  <i
                    data-tip={intl.formatMessage({
                      id: 'data.friendsReffered',
                    })}
                    className="fas fa-info-circle"
                  />
                </p>
                <ReactTooltip />
              </Col>
            </Row>

            <Row className="text-center">
              <Col md={6}>
                <Row>
                  <Col md={2} xs={2} className="text-right ">
                    <button className="cal__button" onClick={() => this.onDecrement('avgcashback')}>
                      <i className="fas fa-minus"  />
                    </button>
                  </Col>
                  <Col md={8} xs={8}>
                    <Input
                      type="number"
                      className="calculator__field"
                      name="avgcashback"
                      onChange={this.onHandleChange}
                      value={avgcashback}
                      readOnly
                    />
                  </Col>
                  <Col md={2} xs={2} className="text-left ">
                    <button onClick={() => this.onIncrement('avgcashback')} className="cal__button">
                      <i className="fas fa-plus" />
                    </button>
                  </Col>
                </Row>
                <p className="fieldText">
                  <FormattedMessage id="data.calAvgCB" />
                  &nbsp;
                  <i
                    data-tip={intl.formatMessage({ id: 'data.avgCashback' })}
                    className="fas fa-info-circle"
                  />
                </p>
                <ReactTooltip />
              </Col>
              <Col md={6}>
                <Row>
              <Col md={2} xs={2} className="text-right ">
                    <button className="cal__button" onClick={() => this.onDecrement('friendshibonus')}>
                      <i className="fas fa-minus"  />
                    </button>
                  </Col>
                  <Col md={8} xs={8}>
                     <Input
                        type="number"
                        className="calculator__field"
                        name="friendshibonus"
                        value={friendshibonus}
                        readOnly
                    />
                  </Col>
                  <Col md={2} xs={2} className="text-left ">
                    <button onClick={() => this.onIncrement('friendshibonus')} className="cal__button">
                      <i className="fas fa-plus" />
                    </button>
                  </Col>


                  </Row>
                <p className="fieldText">
                  <FormattedMessage id="data.calFriendShipBonus" />
                  &nbsp;
                  <i
                    data-tip={intl.formatMessage({
                      id: 'data.friendshipbonus',
                    })}
                    className="fas fa-info-circle"
                  />
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
