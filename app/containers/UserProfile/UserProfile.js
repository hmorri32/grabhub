import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import FollowersList from 'components/FollowersList';
import AvatarImage from './AvatarImage';
import FlexedWrapper from './FlexedWrapper';
import AvatarWrapper from './AvatarWrapper';
import TextWrapper from './TextWrapper';
import ProfileLink from './ProfileLink';
import UserInfo from './UserInfo';

export default class UserProfile extends PureComponent {
  render() {
    const { profile, followers } = this.props;
    const followerProps = { followers };
    const date = moment(profile.created_at).format('L');

    return (
      <FlexedWrapper>
        <AvatarWrapper>
          <AvatarImage src={profile.avatar_url} alt="profile avatar" />
          <TextWrapper>
            <ProfileLink href={profile.html_url} target="_blank">
              {profile.name} ({profile.login})
            </ProfileLink>
            <UserInfo>{profile.bio}</UserInfo>
            <UserInfo>Member since: {date}</UserInfo>
          </TextWrapper>
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
