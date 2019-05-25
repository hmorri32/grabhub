import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_USER_PROFILE,
  LOAD_USER_PROFILE_SUCCESS,
  LOAD_USER_PROFILE_ERROR,
} from '../constants';

import {
  loadRepos,
  reposLoaded,
  repoLoadingError,
  loadUserProfile,
  userProfileLoaded,
  userProfileLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_REPOS,
      };

      expect(loadRepos()).toEqual(expectedResult);
    });
  });

  describe('reposLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_REPOS_SUCCESS,
        repos: fixture,
        username,
      };

      expect(reposLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_REPOS_ERROR,
        error: fixture,
      };

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });

  describe('loadUserProfile', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_USER_PROFILE,
      };

      expect(loadUserProfile()).toEqual(expectedResult);
    });
  });

  describe('userProfileLoaded', () => {
    it('should return the correct type and the passed user profile', () => {
      const fixture = {};
      const expectedResult = {
        type: LOAD_USER_PROFILE_SUCCESS,
        userProfile: fixture,
      };

      expect(userProfileLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('userProfileLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'ay caramba!',
      };
      const expectedResult = {
        type: LOAD_USER_PROFILE_ERROR,
        error: fixture,
      };

      expect(userProfileLoadingError(fixture)).toEqual(expectedResult);
    });
  });

  describe('the rest of the actions. TODO', () => {});
});
