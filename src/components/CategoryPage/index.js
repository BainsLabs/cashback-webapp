import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Banner from "components/common/Banner";
import bannerImg from "static/images/shop-categories/category-banner.png";
import Card from "components/common/Card";
import CardContent from "components/common/CardContent";
import { addsDemo } from "constants/adds";
import uuidv1 from "uuid";
import { FormattedMessage } from "react-intl";

export default () => (
  <>
    <Banner imgSrc={bannerImg} textPosition="center">
      <Container>
        <div className="category__banner">
          <h3>
            <FormattedMessage id="data.SHOPCATEGORIES" />
          </h3>
        </div>
      </Container>
    </Banner>
    <Container className="category__content">
      <Row>
        <Col lg={3} className="category__filter">
          <div className="filters">
            <h5>
              <FormattedMessage id="data.SERVICEAREA" />
            </h5>
            <div className="filter-div">
              <input type="checkbox" />
              <span>
                <FormattedMessage id="data.Global" />
              </span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>
                <FormattedMessage id="data.SelectCountry" />
              </span>
            </div>
          </div>
          <div className="filters">
            <h5>
              <FormattedMessage id="data.MERCHANTTYPE" />
            </h5>
            <div className="filter-div">
              <input type="checkbox" />
              <span>
                <FormattedMessage id="data.Online" />
              </span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>
                <FormattedMessage id="data.InStore" />
              </span>
            </div>
          </div>
          <div className="filters">
            <h5>
              <FormattedMessage id="data.filterboxSCdealtype" />
            </h5>
            <div className="filter-div">
              <input type="checkbox" />
              <span>
                <FormattedMessage id="data.ShareDeal" />
              </span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>
                <FormattedMessage id="data.FlatDeal" />
              </span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>
                <FormattedMessage id="data.filterboxSCtlcdeal" />
              </span>
            </div>
          </div>

          <div className="filters">
            <h5>
              <FormattedMessage id="data.filterboxSC" />
            </h5>
            <div className="filter-div">
              <input type="checkbox" />
              <span>
                <FormattedMessage id="data.FeaturedMerchant" />
              </span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>
                <FormattedMessage id="data.filterboxSCexlusiveoffers" />
              </span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>
                <FormattedMessage id="data.filterboxSCsalesoffer" />
              </span>
            </div>
          </div>
        </Col>
        <Col lg={9}>
          <div className="category-section">
            <Container>
              <Row>
                <Col className="category-section__heading">
                  <h2>
                    <FormattedMessage id="data.ALL" />
                  </h2>
                  <ul>
                    <li className="right-padding">
                      <FormattedMessage id="data.MOSTUSED" />
                    </li>
                    <li className="padding">
                      <FormattedMessage id="data.RECHARGE" />
                    </li>
                    <li className="padding">
                      <FormattedMessage id="data.FOOD" />
                    </li>
                    <li className="padding">
                      <FormattedMessage id="data.TRAVEL" />
                    </li>
                    <li className="padding">
                      <FormattedMessage id="data.FASHION" />
                    </li>
                    <li className="padding">
                      <FormattedMessage id="data.ELECTRONICS" />
                    </li>
                    <li className="padding">
                      <FormattedMessage id="data.footerLIFESTYLE" />
                    </li>
                    <li className="right-padding">
                      <FormattedMessage id="data.footerMARKETPLACE" />
                    </li>
                    <li className="padding">
                      <FormattedMessage id="data.footerSERVICES" />
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                {addsDemo.map(item => (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    className="mb-3 pl-0"
                    key={uuidv1()}
                  >
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
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);
