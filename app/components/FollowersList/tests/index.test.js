import { shallow } from 'enzyme';
import React from 'react';

// import FollowerListItem from 'containers/FollowerListItem';
// import List from '../List';
import FollowersList from '../index';
import ListWrapper from '../ListWrapper';

describe('<FollowersList />', () => {
  it('should render the followers if loading was successful', () => {
    const followers = [
      {
        login: 'TimDaub',
        id: 2758453,
        node_id: 'MDQ6VXNlcjI3NTg0NTM=',
        avatar_url: 'https://avatars1.githubusercontent.com/u/2758453?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/TimDaub',
        html_url: 'https://github.com/TimDaub',
        followers_url: 'https://api.github.com/users/TimDaub/followers',
        following_url:
          'https://api.github.com/users/TimDaub/following{/other_user}',
        gists_url: 'https://api.github.com/users/TimDaub/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/TimDaub/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/TimDaub/subscriptions',
        organizations_url: 'https://api.github.com/users/TimDaub/orgs',
        repos_url: 'https://api.github.com/users/TimDaub/repos',
        events_url: 'https://api.github.com/users/TimDaub/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/TimDaub/received_events',
        type: 'User',
        site_admin: false,
      },
    ];

    const renderedComponent = shallow(<FollowersList followers={followers} />);

    expect(renderedComponent.find(ListWrapper)).toHaveLength(1);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(<FollowersList followers={false} />);

    expect(renderedComponent.html()).toEqual(
      '<h2 class="FollowersList__BrandedH2-icrhr0-0 lckMQs">USER HAS NO FOLLOWERS :(</h2>',
    );
  });
});
