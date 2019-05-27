import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FollowerListItem from 'containers/FollowerListItem';
import H2 from 'components/H2';
import List from './List';
import ListWrapper from './ListWrapper';

function FollowersList({ followers }) {
  const BrandedH2 = styled(H2)`
    margin: 0 10px 10px 10px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 22px;
    color: #a76664;
  `;

  if (followers.length > 0) {
    return (
      <ListWrapper>
        <List items={followers} component={FollowerListItem} />
      </ListWrapper>
    );
  }

  return <BrandedH2>USER HAS NO FOLLOWERS :(</BrandedH2>;
}

FollowersList.propTypes = {
  followers: PropTypes.any,
};

export default FollowersList;
