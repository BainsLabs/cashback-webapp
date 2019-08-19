import React from 'react';
import Banner from 'components/common/Banner';
import ContactBanner from 'static/images/contact/contact-banner.jpg';
import ContactUsForm from 'components/ContactUs/ContactUsForm';
import { FormattedMessage } from 'react-intl';
import ContactServices from 'components/ContactUs/ContactServices';

const ContactUs = () => (
  <>
    <Banner imgSrc={ContactBanner} className="banner-padding">
      <h2 className="vipbanner-text text-center">
        <FormattedMessage id="data.getintouch" />
      </h2>

      <p className="text-center contactus__text">
        <FormattedMessage id="data.feedbacktext" />
      </p>
    </Banner>

    <ContactUsForm />
    {/* <ContactServices /> */}
  </>
);

export default ContactUs;
