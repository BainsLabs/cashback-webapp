import React from "react";
import TopNavbar from "components/common/Navbar/TopNavbar";
import Banner from "components/common/Banner";
import ContactBanner from "static/icons-images/contactbannerimage.jpg";
import ContactUsForm from "components/ContactUs/ContactUsForm";
import ContactServices from "components/ContactUs/ContactServices";

const ContactUs = () => (
  <>
    <TopNavbar />
    <Banner imgSrc={ContactBanner} height="25rem" />
    <ContactUsForm />
    <ContactServices />
  </>
);

export default ContactUs;
