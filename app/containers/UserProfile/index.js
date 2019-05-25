import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectUserProfile,
} from 'containers/App/selectors';

import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import List from 'components/List';

export const UserProfile = ({ loading, error, profile }) => {
  if (loading) return <List component={LoadingIndicator} />;

  if (error) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (profile) return <div>{profile.login}</div>;

  return null;
};

UserProfile.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectUserProfile(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(UserProfile);
