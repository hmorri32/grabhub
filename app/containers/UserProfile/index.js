import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectUserProfile,
  makeSelectUserFollowers,
} from 'containers/App/selectors';

import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import List from 'components/List';
import UserProfile from './UserProfile';

// TODO the user's name, avatar image, a link to their github profile, when they joined the system, and a list of their followers.

export const UserProfileWrapper = ({ loading, error, profile, followers }) => {
  if (loading) return <List component={LoadingIndicator} />;

  if (error) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (profile) {
    const profileProps = { profile, followers };
    return <UserProfile {...profileProps} />;
  }
  return null;
};

UserProfileWrapper.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  followers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectUserProfile(),
  followers: makeSelectUserFollowers(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(UserProfileWrapper);
