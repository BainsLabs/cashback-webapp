import React from 'react';
import Banner from 'components/common/Banner';
import ContactUsForm from 'components/ContactUs/ContactUsForm';
import { FormattedMessage } from 'react-intl';
import { cloudfrontUrl } from 'utils/uitility';

const ContactUs = () => (
  <>
    <Banner imgSrc={cloudfrontUrl('images/contact/contact-banner.jpg')}>
      <h2 className="vipbanner-text text-center">
        <FormattedMessage id="data.getintouch" />
      </h2>
    </Banner>

    <ContactUsForm />
    {/* <ContactServices /> */}
  </>
);

export default ContactUs;
