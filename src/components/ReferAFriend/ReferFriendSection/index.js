import React from 'react';
import ReferLinkSection from 'components/ReferAFriend/ReferFriendSection/ReferLinkSection';
import SocialMediaReferSection from 'components/ReferAFriend/ReferFriendSection/SocialMediaReferSection';
import ReferUsernameSection from 'components/ReferAFriend/ReferFriendSection/ReferUsernameSection';
import { connect } from 'react-redux';

const ReferFriend = (props) => {
  const UserAuthenticated = localStorage.getItem('authenticated');
  const { user } = props;
  const Link = UserAuthenticated ? `${user.userDetail.Items[0].username}.6Degrees.CASH` : '';
  const username = UserAuthenticated ? user.userDetail.Items[0].username : '';
  return (
    <section>
      <div className="container">
        <ReferLinkSection inputValue={Link} />
        <SocialMediaReferSection />
        <ReferUsernameSection username={username} />
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  user: state.User,
});

export default connect(mapStateToProps)(ReferFriend);
