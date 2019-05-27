import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FollowersList from 'components/FollowersList';
import moment from 'moment';
import H2 from 'components/H2';
import AvatarImage from './AvatarImage';
import FlexedWrapper from './FlexedWrapper';
import AvatarWrapper from './AvatarWrapper';

// the user's name, avatar image, a link to their github profile, when they joined the system, and a list of their followers.

export default class UserProfile extends PureComponent {
  render() {
    const { profile, followers } = this.props;
    const date = moment(profile.created_at).format('L');

    const followerProps = { followers };

    return (
      <FlexedWrapper>
        <AvatarWrapper>
          <AvatarImage src={profile.avatar_url} alt="yungmmoney" />
          <div>
            <H2>{profile.name}</H2>
            <H2>{profile.login}</H2>
            <H2>Member since: {date}</H2>
          </div>
        </AvatarWrapper>
        <FollowersList {...followerProps} />
      </FlexedWrapper>
    );
  }
}

UserProfile.propTypes = {
  profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  followers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};
