/**
 * Test: HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS, LOAD_USER_PROFILE } from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  userProfileLoaded,
  userProfileLoadingError,
} from 'containers/App/actions';
import githubData, { getRepos, getUserProfile } from '../saga';
const username = 'mxstbr';

/* eslint-disable redux-saga/yield-effects */
describe('application saga', () => {
  describe('getRepos Saga', () => {
    let getReposGenerator;

    // We have to test twice, once for a successful load and once for an unsuccessful one
    // so we do all the stuff that happens beforehand automatically in the beforeEach
    beforeEach(() => {
      getReposGenerator = getRepos();

      const selectDescriptor = getReposGenerator.next().value;
      expect(selectDescriptor).toMatchSnapshot();

      const callDescriptor = getReposGenerator.next(username).value;
      expect(callDescriptor).toMatchSnapshot();
    });

    it('should dispatch the reposLoaded action if it requests the data successfully', () => {
      const response = [
        {
          name: 'First repo',
        },
        {
          name: 'Second repo',
        },
      ];
      const putDescriptor = getReposGenerator.next(response).value;
      expect(putDescriptor).toEqual(put(reposLoaded(response, username)));
    });

    it('should call the repoLoadingError action if the response errors', () => {
      const response = new Error('oh no');
      const putDescriptor = getReposGenerator.throw(response).value;
      expect(putDescriptor).toEqual(put(repoLoadingError(response)));
    });
  });

  describe('getUserProfile Saga', () => {
    let getUserProfileGenerator;
    beforeEach(() => {
      getUserProfileGenerator = getUserProfile();

      const selectDescriptor = getUserProfileGenerator.next().value;
      expect(selectDescriptor).toMatchSnapshot();

      const callDescriptor = getUserProfileGenerator.next(username).value;
      expect(callDescriptor).toMatchSnapshot();
    });

    it('should dispatch the userProfileLoaded action if it requests the data successfully', () => {
      const response = [
        {
          profile: {},
        },
      ];
      const putDescriptor = getUserProfileGenerator.next(response).value;
      expect(putDescriptor).toEqual(put(userProfileLoaded(response)));
    });

    it('should call the userProfileLoadingError action if the response errors', () => {
      const response = new Error('oh no');
      const putDescriptor = getUserProfileGenerator.throw(response).value;
      expect(putDescriptor).toEqual(put(userProfileLoadingError(response)));
    });
  });

  describe('githubDataSaga Saga', () => {
    const githubDataSaga = githubData();

    it('should start task to watch for LOAD_REPOS action', () => {
      const takeLatestDescriptor = githubDataSaga.next().value;
      expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_REPOS, getRepos));
    });

    it('should start task to watch for LOAD_USER_PROFILE action', () => {
      const takeLatestDescriptor = githubDataSaga.next().value;
      expect(takeLatestDescriptor).toEqual(
        takeLatest(LOAD_USER_PROFILE, getUserProfile),
      );
    });
  });
});
