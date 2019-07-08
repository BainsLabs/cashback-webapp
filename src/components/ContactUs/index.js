import React from 'react';
import Banner from 'components/common/Banner';
import ContactBanner from 'static/icons-images/contactbannerimage.jpg';
import ContactUsForm from 'components/ContactUs/ContactUsForm';
import ContactServices from 'components/ContactUs/ContactServices';

const ContactUs = () => (
  <>
    <Banner imgSrc={ContactBanner} height="29rem" />
    <ContactUsForm />
    <ContactServices />
  </>
);

export default ContactUs;
