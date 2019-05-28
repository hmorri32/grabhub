import React from 'react';
import { shallow } from 'enzyme';

import FollowersList from 'components/FollowersList';
import UserProfile from '../UserProfile';
import AvatarImage from '../AvatarImage';
import ProfileLink from '../ProfileLink';
import UserInfo from '../UserInfo';

describe('<UserProfile /> ', () => {
  it('should render the Followers list', () => {
    const profile = { stuff: 'cool' };
    const followers = [{ cool: 'follower' }];
    const props = { profile, followers };
    const renderedComponent = shallow(<UserProfile {...props} />);

    expect(renderedComponent.find(FollowersList)).toHaveLength(1);
  });

  it('should render the users avatar image', () => {
    const profile = { stuff: 'cool' };
    const followers = [{ cool: 'follower' }];
    const props = { profile, followers };
    const renderedComponent = shallow(<UserProfile {...props} />);

    expect(renderedComponent.find(AvatarImage)).toHaveLength(1);
  });

  it('should render the users profile link', () => {
    const profile = { stuff: 'cool' };
    const followers = [{ cool: 'follower' }];
    const props = { profile, followers };
    const renderedComponent = shallow(<UserProfile {...props} />);

    expect(renderedComponent.find(ProfileLink)).toHaveLength(1);
  });

  it('should render the users user info', () => {
    const profile = { stuff: 'cool' };
    const followers = [{ cool: 'follower' }];
    const props = { profile, followers };
    const renderedComponent = shallow(<UserProfile {...props} />);

    expect(renderedComponent.find(UserInfo)).toHaveLength(2);
  });
});
