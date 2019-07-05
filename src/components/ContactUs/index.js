import React from "react";
import TopNavbar from "components/common/Navbar/TopNavbar";
import BannerComponent from "components/common/Banner";
import ContactUsForm from "components/ContactUs/ContactUsForm";
import ContactServices from "components/ContactUs/ContactServices";

const ContactUs = () => (
  <>
    <TopNavbar />
    <BannerComponent bannerClass="contactus__banner" />
    <ContactUsForm />
    <ContactServices />
  </>
);

export default ContactUs;
