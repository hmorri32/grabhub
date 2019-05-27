import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FollowersList from 'components/FollowersList';
import moment from 'moment';
import H2 from 'components/H2';
import A from 'components/A';
import AvatarImage from './AvatarImage';
import FlexedWrapper from './FlexedWrapper';
import AvatarWrapper from './AvatarWrapper';
import TextWrapper from './TextWrapper';

// TODO the user's name, avatar image, a link to their github profile, when they joined the system, and a list of their followers.

export default class UserProfile extends PureComponent {
  render() {
    const { profile, followers } = this.props;
    const followerProps = { followers };
    const date = moment(profile.created_at).format('L');

    const ProfileLink = styled(A)`
      margin: 10px 10px 10px 0;
      text-decoration: none;
      user-select: none;
      cursor: pointer;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: bold;
      font-size: 26px;
      color: #a76664;

      &:hover {
        border-color: #faa353;
        color: #faa353;
      }

      &:active {
        color: #fff;
      }
    `;

    const UserH2 = styled(H2)`
      margin: 0 10px 10px 0;
      font-size: 20px;
      -webkit-font-smoothing: antialiased
      -webkit-touch-callout: none;
      font-size: 18px;
      font-weight: normal;
      color: #a76664;
      width: 400px;
    `;

    return (
      <FlexedWrapper>
        <AvatarWrapper>
          <AvatarImage src={profile.avatar_url} alt="yungmmoney" />
          <TextWrapper>
            <ProfileLink href={profile.html_url} target="_blank">
              {profile.name} ({profile.login})
            </ProfileLink>
            <UserH2>{profile.bio}</UserH2>
            <UserH2>Member since: {date}</UserH2>
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
