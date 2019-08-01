import React from 'react';
import ReferLinkSection from 'components/ReferAFriend/ReferFriendSection/ReferLinkSection';
import SocialMediaReferSection from 'components/ReferAFriend/ReferFriendSection/SocialMediaReferSection';
import ReferUsernameSection from 'components/ReferAFriend/ReferFriendSection/ReferUsernameSection';

export default () => (
  <section>
    <div className="container">
      <ReferLinkSection />
      <SocialMediaReferSection />
      <ReferUsernameSection />
    </div>
  </section>
);
