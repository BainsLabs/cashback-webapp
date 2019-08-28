import React from 'react';
import Card from 'components/common/Card';
import CardContent from 'components/common/CardContent';
import { adds, members } from 'constants/adds';
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import uuidv1 from 'uuid';
import { withRouter } from 'react-router-dom';

export default withRouter(props => (
  <div className="add-section">
    <Container>
      <Row>
        <Col lg={9} className="add-section__heading">
          <h2 className="text-uppercase">
            <FormattedMessage id="data.filterboxSCfeaturedmarchant" />
          </h2>
          <Row>
            {adds.map(item => (
              <Col xs={12} md={6} lg={4} className="mb-3 pl-0 category__item " key={uuidv1()}>
                <Card
                  classValue="card__content-hover"
                  backgroundImage={item.bgImg}
                  textPosition="center"
                  border
                >
                  <CardContent brandLogo={item.icon} data={item} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={3} className="no-padding">
          <Row>
            {members.map(item => (
              <Col lg={12} md={6} key={uuidv1()} className="mb-3 no-padding">
                <Card
                  classValue="card__content-hover"
                  backgroundColor="#96c1eb"
                  textPosition="center"
                  border
                  // width="15rem"
                  height="100%"
                >
                  <div className="card__add-section">
                    <img src={item.image} alt="brand" className={item.class} />
                    <br />
                    <button onClick={() => props.history.push(item.url)} type="button">
                      {item.btnText}
                    </button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
));
