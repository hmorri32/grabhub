import React from 'react';
import { FormattedMessage } from 'react-intl';
import InlineLink from './InlineLink';
import NavBar from './NavBar';
import messages from './messages';
import { GrabHubSVG } from './GrabHubSVG';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <InlineLink to="/">
            <GrabHubSVG />
            <FormattedMessage {...messages.startProjectHeader} />
          </InlineLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
