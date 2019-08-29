import React from 'react';
import { cloudfrontUrl } from 'utils/uitility';
import Modal from 'react-responsive-modal';

export default (props) => {
  const language = localStorage.getItem('country');
  return (
    <>
      <Modal open={props.open} onClose={props.onClose}>
        <div className="coming__soon">
          <img
            src={
              language === 'en-US'
                ? cloudfrontUrl('images/vip-banefits/VIP-upgrade-image.png')
                : cloudfrontUrl('images/vip-banefits/VIP-upgrade-image(chinese).png')
            }
            alt="vip comingsoon"
          />
        </div>
      </Modal>
    </>
  );
};
