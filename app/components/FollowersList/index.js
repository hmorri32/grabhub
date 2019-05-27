import React from 'react';
import PropTypes from 'prop-types';

import FollowerListItem from 'containers/FollowerListItem';
import List from './List';
import ListWrapper from './ListWrapper';
// todo: maybe make this a pure component. idk
function FollowersList({ followers }) {
  if (followers) {
    return (
      <ListWrapper>
        <List items={followers} component={FollowerListItem} />
      </ListWrapper>
    );
  }

  return null;
}

FollowersList.propTypes = {
  followers: PropTypes.any,
};

export default FollowersList;
