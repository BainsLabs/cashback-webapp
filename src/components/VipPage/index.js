import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { cloudfrontUrl } from 'utils/uitility'
import Banner from "components/common/Banner";
import BenefitsCard from "components/common/benefitscard";
import { FormattedMessage } from "react-intl";
import CalculatorForm from "components/MyEarnings/calculator/CalculatorForm";
import ComingSoon from "components/commingSoon";

const VipPage = () => {
  const language = localStorage.getItem("country");
  const [open, modalOpen] = useState(false);
  useEffect(() => window.scrollTo(0, 0));
  return (
    <>
      <Banner
        imgSrc={cloudfrontUrl('images/vip-banefits/vip-banner.jpg')}
        textPosition="center"
      >
        <h2 className="vipbanner-text text-uppercase">
          <FormattedMessage id="data.vipbanner" />
        </h2>
      </Banner>
      <Container className="text-center vip__container">
        <Row>
          <Col md={6}>
            <img src={cloudfrontUrl('images/vip-banefits/vip.jpg')} alt="vipImage" className="vip__image" />
          </Col>
          <Col md={6} className="vip__desc text-left">
            <h3 className="viptext">
              <FormattedMessage id="data.enjoyVip" />
            </h3>
            <p className="vip__description">
              <FormattedMessage id="data.vipdesc" />
            </p>
            <p className="bluetext">
              <FormattedMessage id="data.blueText" />
            </p>
            <p className="text-center">
              <button
                type="button"
                className="vip__button"
                onClick={() => modalOpen(true)}
              >
                <FormattedMessage id="data.vipupgrade" />
                &nbsp;
                <i className="fas fa-angle-right" />
              </button>
            </p>
          </Col>
          <ComingSoon open={open} onClose={() => modalOpen(false)} />
        </Row>
        <Row>
          <Col md={4} className="vip__benefits">
            <BenefitsCard
              backgroundColor="#ffec8d"
              className="vip__benfits text-center"
            >
              <p className="vip__text">
                <FormattedMessage id="data.headermyearningsvipcashback2" />
              </p>
              <p className="vip__benefitdesc">1</p>
            </BenefitsCard>
          </Col>
          <Col md={4} className="vip__benefits ">
            <BenefitsCard
              backgroundColor="#96c1eb"
              className="vip__benfits text-center"
            >
              <p className="vip__text">
                <FormattedMessage id="data.headermyearningsvipbvipbonus" />
              </p>
              <p className="vip__benefitdesc">2</p>
            </BenefitsCard>
          </Col>

          <Col md={4} className="vip__benefits">
            <BenefitsCard
              backgroundColor="#f7e4e4"
              className="vip__benfits text-center"
            >
              <p className="vip__text">
                <FormattedMessage id="data.headermyearningsfriendshipbonus" />
              </p>
              <p className="vip__benefitdesc">3</p>
            </BenefitsCard>
          </Col>
        </Row>
        <Row>
          {console.log(language, "lan")}
          <Col md={6}>
            <img
              src={language === "en-US" ? cloudfrontUrl('images/vip-banefits/vipcashback.png') : cloudfrontUrl('images/vip-banefits/chinesevipcashback.png')}
              alt="vip casback"
              className="cashback__img"
            />
          </Col>
          <Col md={6}>
            <p className="cashtext">
              <h3>
                1. <FormattedMessage id="data.headermyearningsvipcashback2" />
              </h3>
              <FormattedMessage id="data.vipcashbackText" />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p className="cashtext">
              <h3>
                2. <FormattedMessage id="data.headermyearningsvipbvipbonus" />
              </h3>
              <FormattedMessage id="data.vipbonustext" />
            </p>
          </Col>
          <Col md={6}>
            <img
              src={language === "en-US" ? cloudfrontUrl('images/vip-banefits/vipbonus.png') : cloudfrontUrl('images/vip-banefits/vipchi.png')}
              alt="vip casback"
              className="cashback__img"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Col>
              <img
                src={
                  language === "en-US" ? cloudfrontUrl('images/vip-banefits/friendshipbonus.png') : cloudfrontUrl('images/vip-banefits/chinesefriendshipbonus.png')
                }
                alt="vip casback"
                className="vipcashback__img"
              />
            </Col>
            <Col>
              <img
                src={cloudfrontUrl('images/vip-banefits/friendshipbonus.jpg')}
                alt="vip casback"
                className="vipcashback__img"
              />
            </Col>
          </Col>
          <Col md={6}>
            <p className="cashtext">
              <h3>
                3.{" "}
                <FormattedMessage id="data.headermyearningsfriendshipbonus" />
              </h3>
              <FormattedMessage id="data.friendshipbonus1" />&nbsp;
              <FormattedMessage id="data.friendshipbonus2" />
            </p>
          </Col>
        </Row>
        <Row className="calculator__form text-center">

            <CalculatorForm />

        </Row>
      </Container>
    </>
  );
};

export default VipPage;
