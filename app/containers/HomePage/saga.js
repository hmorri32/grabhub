import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS, LOAD_USER_PROFILE } from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  userProfileLoaded,
  userProfileLoadingError,
} from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

export function* getRepos() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  try {
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getUserProfile() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}`;
  try {
    const userProfile = yield call(request, requestURL);
    yield put(userProfileLoaded(userProfile));
  } catch (err) {
    yield put(userProfileLoadingError(err));
  }
}

export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_USER_PROFILE, getUserProfile);
}
