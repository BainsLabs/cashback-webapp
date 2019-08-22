import React from 'react';
import Banner from 'components/common/Banner';
import Modal from 'react-responsive-modal';
import CommingSoon from 'static/images/vip-banefits/VIP-upgrade-image.png';
import CommingSoonchin from 'static/images/vip-banefits/VIP-upgrade-image(chinese).png';

export default (props) => {
  const language = localStorage.getItem('country');
  return (
    <>
      <Modal open={props.open} onClose={props.onClose}>
        {language === 'en-US' ? (
          <img src={CommingSoon} alt="vip comingsoon" className="coming__soon" />
        ) : (
          <img src={CommingSoonchin} alt="vip comingsoon" className="coming__soon" />
        )}
      </Modal>
    </>
  );
};
