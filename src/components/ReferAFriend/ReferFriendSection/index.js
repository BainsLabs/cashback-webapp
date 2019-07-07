import React, { Component } from "react";
import ReferLinkSection from "components/ReferAFriend/ReferFriendSection/ReferLinkSection";
import SocialMediaReferSection from "components/ReferAFriend/ReferFriendSection/SocialMediaReferSection";
import ReferUsernameSection from "components/ReferAFriend/ReferFriendSection/ReferUsernameSection";

class ReferFriendSection extends Component {
  render() {
    return (
      <section>
        
        <div className="container">
          <ReferLinkSection />
          <SocialMediaReferSection />
          <ReferUsernameSection />
        </div>
      </section>
    );
  }
}

export default ReferFriendSection;
