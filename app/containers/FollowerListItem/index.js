import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import FollowerLink from './FollowerLink';
import Wrapper from './Wrapper';
import AvatarImage from '../HomePage/AvatarImage';

export class FollowerListItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    const content = (
      <Wrapper>
        <AvatarImage src={item.avatar_url} alt="avatar url" />
        <FollowerLink href={item.html_url} target="_blank">
          {item.login}
        </FollowerLink>
      </Wrapper>
    );

    return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
  }
}

FollowerListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(FollowerListItem);
