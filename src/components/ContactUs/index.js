import React from "react";
import TopNavbar from "components/common/Navbar/TopNavbar";
import BannerComponent from "components/common/Banner";
import ContactUsForm from "components/ContactUs/ContactUsForm";

const ContactUs = () => (
  <>
    <TopNavbar />
    <BannerComponent bannerClass="contactus__banner" />
    <ContactUsForm />
  </>
);

export default ContactUs;
