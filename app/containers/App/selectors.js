import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');
const selectRouter = state => state.get('router');

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectRepos = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['userData', 'repositories']),
  );

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeSelectUserProfile = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['userData', 'profile']),
  );

const makeSelectUserFollowers = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['userData', 'followers']),
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectUserProfile,
  makeSelectUserFollowers,
};
