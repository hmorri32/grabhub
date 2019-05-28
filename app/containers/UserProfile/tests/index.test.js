import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import { UserProfileWrapper } from '../index';
import UserProfile from '../UserProfile';

describe('<UserProfileWrapper />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(<UserProfileWrapper loading />);
    expect(
      renderedComponent.contains(<List component={LoadingIndicator} />),
    ).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <UserProfileWrapper
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>,
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the user profile if loading was successful', () => {
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

    const profile = {
      login: 'hmorri32',
      id: 20346065,
      node_id: 'MDQ6VXNlcjIwMzQ2MDY1',
      avatar_url: 'https://avatars2.githubusercontent.com/u/20346065?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/hmorri32',
      html_url: 'https://github.com/hmorri32',
      followers_url: 'https://api.github.com/users/hmorri32/followers',
      following_url:
        'https://api.github.com/users/hmorri32/following{/other_user}',
      gists_url: 'https://api.github.com/users/hmorri32/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/hmorri32/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/hmorri32/subscriptions',
      organizations_url: 'https://api.github.com/users/hmorri32/orgs',
      repos_url: 'https://api.github.com/users/hmorri32/repos',
      events_url: 'https://api.github.com/users/hmorri32/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/hmorri32/received_events',
      type: 'User',
      site_admin: false,
      name: 'Hugh Morrison',
      company: 'Engineer @concept3D ',
      blog: '',
      location: 'DENVER',
      email: null,
      hireable: null,
      bio: 'React. API design. Maps. ',
      public_repos: 111,
      public_gists: 9,
      followers: 8,
      following: 3,
      created_at: '2016-07-07T22:04:45Z',
      updated_at: '2019-05-13T16:50:13Z',
    };

    const renderedComponent = shallow(
      <UserProfileWrapper
        followers={followers}
        profile={profile}
        error={false}
      />,
    );

    const userProfileProps = { profile, followers };

    expect(
      renderedComponent.contains(<UserProfile {...userProfileProps} />),
    ).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <UserProfileWrapper profile={false} error={false} loading={false} />,
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
