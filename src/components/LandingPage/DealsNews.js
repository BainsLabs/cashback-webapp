import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import HP from 'static/images/home-page/tlc-logo1.png';
import newsImage from 'static/icons-images/news-img1.jpg';
import HP2 from 'static/images/home-page/tlc-logo2.png';
import { FormattedMessage } from 'react-intl';
import ComingSoon from 'components/commingSoon';
import { TLCdeals } from 'constants/adds';
import Card from 'components/common/Card';
import CardContent from 'components/common/CardContent';
import uuidv1 from 'uuid';

export default () => {
  return (
    <Row className="tlcdeals">
      {TLCdeals.map(item => (
        <Col xs={12} md={6} lg={3} className="mb-3 tlccategory__item " key={uuidv1()}>
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
  );
};
//
//       {' '}
//       <Row className="deals-news">
//         // // // //
//         {' '}
//         <Col className="deals__section no-padding" lg={12}>
//           // // // //
//           {' '}
//           <span className="deals__section-heading">
//             // // // //
//             {' '}
//             <FormattedMessage id="data.HPhotdeals" />
//             // // // //
//             {' '}
//           </span>
//           // // // //
//           {' '}
//           <button type="button" className="text-white float-right deals__section-see-all">
//             // // // //
//             {' '}
//             <FormattedMessage id="data.HPseeall" />
//             // // // //
//             {' '}
//           </button>
//           // // // //
//           {' '}
//           <Row className="deals__section-content ">
//             // // // //
//             {' '}
//             <Col md={4} className="text-center">
//               // // // //
//               {' '}
//               <img src={HP} alt="hp-logo" />
//               // // // //
//               {' '}
//             </Col>
//             // // // //
//             {' '}
//             <Col md={8} className="shopnow__button">
//               // // // //
//               {' '}
//               <p>
//                 // // // //
//                 {' '}
//                 <FormattedMessage id="data.LPDEals" />
//                 // // // //
//                 {' '}
//               </p>
//               // // // //
//               {' '}
//               <button type="button" onClick={() => openModal(true)}>
//                 // // // //
//                 {' '}
//                 <FormattedMessage id="data.HPshopnow" />
//                 // // // //
//                 {' '}
//               </button>
//               // // // //
//               {' '}
//             </Col>
//             // // // //
//             {' '}
//           </Row>
//           // // // //
//           {' '}
//           <Row className="deals__section-content">
//             // // // //
//             {' '}
//             <Col md={4} className="text-center">
//               // // // //
//               {' '}
//               <img src={HP2} alt="hp-logo" />
//               // // // //
//               {' '}
//             </Col>
//             // // // //
//             {' '}
//             <Col md={8} className="shopnow__button">
//               // // // //
//               {' '}
//               <p>
//                 // // // //
//                 {' '}
//                 <FormattedMessage id="data.delasNewsLP1" />
//                 // // // //
//                 {' '}
//               </p>
//               // // // //
//               {' '}
//               <button type="button" onClick={() => openModal(true)}>
//                 // // // //
//                 {' '}
//                 <FormattedMessage id="data.HPshopnow" />
//                 // // // //
//                 {' '}
//               </button>
//               // // // //
//               {' '}
//             </Col>
//             // // // //
//             {' '}
//           </Row>
//           // // // //
//           {' '}
//         </Col>
//         // // // //
//         {' '}
//         <ComingSoon open={open} onClose={() => openModal(false)} />
//         {/* <Col lg={3}>
//         <div className="news__section no-padding">
//           <span className="news__section-heading">
//             <FormattedMessage id="data.NEWS" />
//           </span>
//           <button type="button" className="text-white float-right news__section-see-all">
//             <FormattedMessage id="data.HPseeall" />
//           </button>
//           <Row className="news__section-content">
//             <Col md={5} className="no-padding">
//               <img src={newsImage} alt="newsimage" />
//             </Col>
//             <Col md={7}>
//               <p>Ullamco est sit ipsum incididunt.Deserunt laboris consequat</p>
//               <span>
//                 <i className="far fa-clock" />
//               </span>
//               <span>01 July 2019</span>
//             </Col>
//           </Row>
//           <Row className="news__section-content">
//             <Col md={5} className="no-padding">
//               <img src={newsImage} alt="newsimage" />
//             </Col>
//             <Col md={7}>
//               <p>Ullamco est sit ipsum incididunt.Deserunt laboris consequat</p>
//               <span>
//                 <i className="far fa-clock" />
//               </span>
//               <span>01 July 2019</span>
//             </Col>
//           </Row>
//           <Row className="news__section-content">
//             <Col md={5} className="no-padding">
//               <img src={newsImage} alt="newsimage" />
//             </Col>
//             <Col md={7}>
//               <p>Ullamco est sit ipsum incididunt.Deserunt laboris consequat</p>
//               <span>
//                 <i className="far fa-clock" />
//               </span>
//               <span>01 July 2019</span>
//             </Col>
//           </Row>
//           <Row className="news__section-content">
//             <Col md={5} className="no-padding">
//               <img src={newsImage} alt="newsimage" />
//             </Col>
//             <Col md={7}>
//               <p>Ullamco est sit ipsum incididunt.Deserunt laboris consequat</p>
//               <span>
//                 <i className="far fa-clock" />
//               </span>
//               <span>01 July 2019</span>
//             </Col>
//           </Row>
//         </div>
//       </Col> */}
//         //
//         {' '}
//       // </Row>
