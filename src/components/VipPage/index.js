import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Banner from "components/common/Banner";
import vipImage from "static/images/vip-banefits/vip.jpg";
import VipBanner from "static/images/vip-banefits/vip-banner.jpg";
import friendshipbonus2 from "static/images/vip-banefits/friendshipbonus.jpg";
import friendshipbonus from "static/images/vip-banefits/friendshipbonus.png";
import chifriendshipbonus from "static/images/vip-banefits/chinesefriendshipbonus.png";
import VipBonus from "static/images/vip-banefits/vipbonus.png";
import VipBonuschi from "static/images/vip-banefits/vipchi.png";
import Vipcashback from "static/images/vip-banefits/vipcashback.png";
import chinesevipcashback from "static/images/vip-banefits/chinesevipcashback.png";
import BenefitsCard from "components/common/benefitscard";
import { FormattedMessage } from "react-intl";
// import CalculatorModal from 'components/MyEarnings/calculator/calculatorModal';
import CalculatorForm from "components/MyEarnings/calculator/CalculatorForm";
import ComingSoon from "components/commingSoon";

const VipPage = () => {
  const language = localStorage.getItem("country");
  const [open, modalOpen] = useState(false);
  return (
    <>
      <Banner
        imgSrc={VipBanner}
        className="banner-padding"
        textPosition="center"
      >
        <h3 className="vipbanner-text">
          <FormattedMessage id="data.vipbanner" />
        </h3>
      </Banner>
      <Container className="text-center vip__container">
        <Row>
          <Col md={6}>
            <img src={vipImage} alt="vipImage" className="vip__image" />
          </Col>
          <Col md={6} className="vip__desc text-left">
            <h3 className="vipbanner-text">
              <FormattedMessage id="data.enjoyVip" />
            </h3>
            <p>
              <FormattedMessage id="data.vipdesc" />
            </p>
            <p className="bluetext">
              <FormattedMessage id="data.blueText" />
            </p>
            <p>
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
              src={language === "en-US" ? Vipcashback : chinesevipcashback}
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
              src={language === "en-US" ? VipBonus : VipBonuschi}
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
                  language === "en-US" ? friendshipbonus : chifriendshipbonus
                }
                alt="vip casback"
                className="vipcashback__img"
              />
            </Col>
            <Col>
              <img
                src={friendshipbonus2}
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
              <FormattedMessage id="data.friendshipbonus1" />
              <FormattedMessage id="data.friendshipbonus2" />
            </p>
          </Col>
        </Row>
        <Row className="calculator__form text-center">
          <Col>
            <CalculatorForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VipPage;
