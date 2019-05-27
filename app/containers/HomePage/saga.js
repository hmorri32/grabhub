import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  LOAD_REPOS,
  LOAD_USER_PROFILE,
  LOAD_USER_FOLLOWERS,
} from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  userProfileLoaded,
  userProfileLoadingError,
  userFollowersLoaded,
  userFollowersLoadingError,
} from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

export function* getRepos() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  try {
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (e) {
    yield put(repoLoadingError(e));
  }
}

export function* getUserProfile() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}`;
  try {
    const userProfile = yield call(request, requestURL);
    yield put(userProfileLoaded(userProfile));
  } catch (e) {
    yield put(userProfileLoadingError(e));
  }
}

export function* getUserFollowers() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/followers`;
  try {
    const followers = yield call(request, requestURL);
    yield put(userFollowersLoaded(followers));
  } catch (e) {
    yield put(userFollowersLoadingError(e));
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_USER_PROFILE, getUserProfile);
  yield takeLatest(LOAD_USER_FOLLOWERS, getUserFollowers);
}
