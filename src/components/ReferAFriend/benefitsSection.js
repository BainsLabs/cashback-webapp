import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { cloudfrontUrl } from 'utils/uitility';

export default () => {
  const language = localStorage.getItem('country');
  return (
    <section>
      <Row>
        <Col className="text-center">
          <img
            src={
              language === 'en-US'
                ? cloudfrontUrl('images/referAfriend/side-img(eng).png')
                : cloudfrontUrl('images/referAfriend/side-img(chi).png')
            }
            alt="refer friend content"
            className="side__content"
          />
        </Col>
      </Row>
    </section>
  );
};
