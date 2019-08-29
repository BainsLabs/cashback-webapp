import React, { useState } from 'react';
import Banner from 'components/common/Banner';
import { connect } from 'react-redux';
import CategorySection from 'components/LandingPage/CategorySection';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImg from 'static/images/home-page/banner-1.jpg';
import bannerImg1 from 'static/images/home-page/banner-2.jpg';
import bannerImg2 from 'static/images/home-page/banner-3.jpg';
import bannerImgchi from 'static/images/home-page/bannerchi1.jpg';
import bannerImgchi1 from 'static/images/home-page/bannerchi2.jpg';
import bannerImgchi2 from 'static/images/home-page/bannerchi3.jpg';
import Card from 'components/common/Card';
import BlackLine from 'static/icons-images/black-line.png';
// import JoinFree from 'static/images/home-page/joinfree-bg.jpg';
import ReferAFriendBG from 'static/images/home-page/referAfriend-bg.png';
import joinNow from 'static/icons-images/Logo1_White_1000px.png';
import { withRouter } from 'react-router-dom';
import { modalState } from 'redux/actions/modalActions';
import AddSection from 'components/LandingPage/AddSection';
import DealsNews from 'components/LandingPage/DealsNews';
import { featureAdds } from 'constants/adds';
import { FormattedMessage } from 'react-intl';
import CardContent from 'components/common/CardContent';
import uuidv1 from 'uuid';
import { Snackbar } from '@material/react-snackbar';
// import CommonSlider from 'components/common/Slider/Slider'
import Slider from 'react-slick';

// eslint-disable-next-line arrow-parens
const LandingPage = props => {
  const [snackbarState, setSnackbarState] = useState(false)
  let language = localStorage.getItem('country')
  const authenticated = localStorage.getItem('authenticated');
  // let cashBack = props.contents.map((cont) => {
  //   return {cont.location === "myearningvip" && cont.section==="header" ? cont.content:""}
  // useEffect(() => localStorage.setItem('country', 'en-US'));
  // })
  const loginCheck = () => {
    if (authenticated) {
      setSnackbarState(true);
      return;
    }
    props.modalState('signup')
  }
  const setting = {
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: '5000',
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
  <Slider {...setting}>
        <img src={language === 'en-US' ? bannerImg : bannerImgchi} height="450px"/>
        <img src={language === 'en-US' ?bannerImg1 : bannerImgchi1}  height="450px"/>
        <img src={language === 'en-US' ? bannerImg2 :bannerImgchi2}  height="450px"/>
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

        <>
            <Row className="landing__join">
                <Col lg={2} className="join__logo">
                <img src={joinNow} alt="joinNowLogo" />
                </Col>
                <Col lg={6} className="bannertext">
                <FormattedMessage id="data.HPBanner" />
                </Col>
                <Col lg={4}>
                <button
                  onClick={loginCheck}
                  className="banner-btn banner-btn-mobile"
                  type="button"
                >
                  <FormattedMessage id="data.referJoinNow" />
                </button>
                </Col>
            </Row>
          <Snackbar message={<FormattedMessage id="data.alreadyLoggedIn" />} open={snackbarState} />
        </>
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

        <>
            <Row className="referlanding__join text-center">
                <Col lg={8} className="referbannertext">
                <FormattedMessage id="data.menuHPcapsrefer" />
                </Col>
                <Col lg={4} className="bannerbutton">
                <button
                  onClick={() => props.history.push('/refer-friend')}
                  className="referbanner-btn"
                  type="button"
                >
                  <FormattedMessage id="data.menuHPcapsrefer" />
                </button>
                </Col>
            </Row>
          <Snackbar message={<FormattedMessage id="data.alreadyLoggedIn" />} open={snackbarState} />
        </>


        <DealsNews />

      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  contents: state.Content.contentList || [],
});

const mapDispatchToProps = {
  modalState,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LandingPage),
);
