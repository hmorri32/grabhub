import React from 'react';
import { FormattedMessage } from 'react-intl';
import InlineH2 from './InlineH2';
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
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <InlineH2>
            <GrabHubSVG />
            <FormattedMessage {...messages.startProjectHeader} />
          </InlineH2>
        </NavBar>
      </div>
    );
  }
}

export default Header;
