import React from 'react';
import { FormattedMessage } from 'react-intl';
import InlineLink from './InlineLink';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
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
          <HeaderLink to="/style-guide">Style Guide</HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
