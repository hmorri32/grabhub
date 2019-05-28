import React from 'react';
import { shallow, render } from 'enzyme';

import ListItem from 'components/ListItem';
import { FollowerListItem } from '../index';

const renderComponent = (props = {}) => render(<FollowerListItem {...props} />);

describe('<FollowerListItem />', () => {
  let item;

  beforeEach(() => {
    item = {
      id: 80948788,
      node_id: 'MDEwOlJlcG9zaXRvcnk4MDk0ODc4OA==',
      name: 'micro-github',
      full_name: 'mxstbr/micro-github',
      private: false,
      avatar_url: 'https://avatars0.githubusercontent.com/u/7525670?v=4',
      owner: {
        login: 'mxstbr',
        id: 7525670,
        node_id: 'MDQ6VXNlcjc1MjU2NzA=',
        avatar_url: 'https://avatars0.githubusercontent.com/u/7525670?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mxstbr',
        html_url: 'https://github.com/mxstbr',
        followers_url: 'https://api.github.com/users/mxstbr/followers',
        following_url:
          'https://api.github.com/users/mxstbr/following{/other_user}',
        gists_url: 'https://api.github.com/users/mxstbr/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/mxstbr/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/mxstbr/subscriptions',
        organizations_url: 'https://api.github.com/users/mxstbr/orgs',
        repos_url: 'https://api.github.com/users/mxstbr/repos',
        events_url: 'https://api.github.com/users/mxstbr/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/mxstbr/received_events',
        type: 'User',
        site_admin: true,
      },
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(
      <FollowerListItem item={item} src="stuff" />,
    );
    expect(renderedComponent.find(ListItem)).toHaveLength(1);
  });

  it('should not render the users that arent folllowers', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).not.toContain('bob');
  });
});
