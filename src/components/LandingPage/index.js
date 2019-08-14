import React, { useEffect } from "react";
import Banner from "components/common/Banner";
import { connect } from "react-redux";
import CategorySection from "components/LandingPage/CategorySection";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from "static/images/home-page/banner-1.jpg";
import bannerImg1 from "static/images/home-page/banner-2.jpg";
import bannerImg2 from "static/images/home-page/banner-3.jpg";
import Card from "components/common/Card";
import BlackLine from "static/icons-images/black-line.png";
import JoinFree from "static/images/home-page/joinfree-bg.jpg";
import ReferAFriendBG from "static/images/home-page/referAfriend-bg.png";
import joinNow from "static/icons-images/join-now.png";
import { withRouter } from "react-router-dom";
import { modalState } from "redux/actions/modalActions";
import AddSection from "components/LandingPage/AddSection";
import DealsNews from "components/LandingPage/DealsNews";
import { featureAdds } from "constants/adds";
import { FormattedMessage } from "react-intl";
import CardContent from "components/common/CardContent";
import uuidv1 from "uuid";
// import CommonSlider from 'components/common/Slider/Slider'
import Slider from "react-slick";

// eslint-disable-next-line arrow-parens
const LandingPage = props => {
  // let cashBack = props.contents.map((cont) => {
  //   return {cont.location === "myearningvip" && cont.section==="header" ? cont.content:""}
  useEffect(() => localStorage.setItem("country", "en-US"));
  // })
  const setting = {
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: "500",
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider
        {...setting}
      >
        <Banner imgSrc={bannerImg} height="29rem" position="top"/>
        <Banner imgSrc={bannerImg1} height="29rem" position="top"/>
        <Banner imgSrc={bannerImg2} height="29rem" position="top"/>
      </Slider>
      {/* <Container>
          <div className="home__banner">
            <p>$100</p>
            <p className="banner-text">
              <FormattedMessage id="data.headermyearningscashback" />
            </p>
            <p className="banner-limited">
              <span>
                <FormattedMessage id="data.limited" />
              </span>
              <span>
                <FormattedMessage id="data.period" />
              </span>
              <span>
                <FormattedMessage id="data.offer" />
              </span>
            </p>
            <button className="home__book-btn" type="button">
              <FormattedMessage id="data.booknow" />
            </button>
          </div>
        </Container> */}

      <CategorySection />
      <AddSection />
      <Container>
        <Banner imgSrc={JoinFree} textPosition="center">
          <div className="join-now">
            <Row>
              <Col lg={8}>
                <Row>
                  <Col lg={4} className="join-now__logo">
                    <img src={joinNow} alt="joinNowLogo" />
                  </Col>
                  <Col lg={8} className="join-now__text">
                    <FormattedMessage id="data.HPBanner" />
                  </Col>
                </Row>
              </Col>
              <Col lg={4}>
                <button
                  onClick={() => props.modalState("signup")}
                  className="banner-btn banner-btn-mobile"
                  type="button"
                >
                  <FormattedMessage id="data.referJoinNow" />
                </button>
              </Col>
            </Row>
          </div>
        </Banner>
        <div className="merchant">
          <Row>
            <Col xs={12}>
              <h3>
                <FormattedMessage id="data.filterboxSCfeaturedmarchant" />
              </h3>
            </Col>
          </Row>
          <Row>
            {featureAdds.map(item => (
              // <Col xs={12} md={6} lg={3} className="mb-2 card-padding">
              //   <Card classValue="hover-featured">
              //     <>
              //       <img src={item.brandImg} className="mx-auto" alt="amazon" />
              //       <div className="card__content">
              //         <p>{item.offer}</p>
              //         <p>{item.offerType}</p>
              //         <img
              //           src={BlackLine}
              //           alt="line"
              //           className="mx-auto"
              //           height="1rem"
              //           widht="inherit"
              //         />
              //         <p>
              //           <FormattedMessage id="data.plus" />
              //           {item.tlc}
              //           <br />
              //           <FormattedMessage id="data.rewards" />
              //         </p>
              //         <p>
              //           <FormattedMessage id="data.HPcode" />
              //           &nbsp;
              //           <span className="card-code">JULY 2019</span>
              //         </p>
              //         <p>
              //           <FormattedMessage id="data.expire" /> 7/07/2019
              //         </p>
              //       </div>
              //     </>
              //   </Card>
              <Col xs={12} md={6} lg={3} className="mb-3 pl-0" key={uuidv1()}>
                <Card
                  classValue="card__content-hover"
                  backgroundImage={item.bgImg}
                  textPosition="center"
                  border
                >
                  <CardContent brandLogo={item.icon} data={item} />
                </Card>
              </Col>
              // </Col>
            ))}
          </Row>
        </div>
        <Banner imgSrc={ReferAFriendBG} textPosition="center">
          <>
            <Row>
              <Col lg={8}>
                <p className="refer__banner">
                  <FormattedMessage id="data.menuHPcapsrefer" />
                </p>
              </Col>
              <Col lg={4}>
                <button
                  onClick={() => props.history.push("/refer-friend")}
                  className="banner-btn"
                  type="button"
                >
                  <FormattedMessage id="data.menuHPcapsrefer" />
                </button>
              </Col>
            </Row>
          </>
        </Banner>
        <DealsNews />
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  contents: state.Content.contentList || []
});

const mapDispatchToProps = {
  modalState
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPage)
);
