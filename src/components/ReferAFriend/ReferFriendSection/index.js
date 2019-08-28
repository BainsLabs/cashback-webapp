import React from 'react';
import ReferLinkSection from 'components/ReferAFriend/ReferFriendSection/ReferLinkSection';
import SocialMediaReferSection from 'components/ReferAFriend/ReferFriendSection/SocialMediaReferSection';
import ReferUsernameSection from 'components/ReferAFriend/ReferFriendSection/ReferUsernameSection';
import { connect } from 'react-redux';

const ReferFriend = (props) => {
  const UserAuthenticated = localStorage.getItem('authenticated');
  const Profile = JSON.parse(localStorage.getItem('profile'));
  const { user } = props;
  const Link = UserAuthenticated ? `${Profile.Items[0].username}.6Degrees.CASH` : '';
  const username = UserAuthenticated ? Profile.Items[0].username : '';
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
