import { fromJS } from 'immutable';
import appReducer from '../reducer';
import {
  loadRepos,
  reposLoaded,
  repoLoadingError,
  loadUserProfile,
  userProfileLoaded,
  userProfileLoadingError,
  loadUserFollowers,
  userFollowersLoaded,
  userFollowersLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentUser: false,
      userData: fromJS({
        repositories: false,
        profile: false,
        followers: false,
      }),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  describe('load repose', () => {
    it('should handle the loadRepos action correctly', () => {
      const expectedResult = state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);

      expect(appReducer(state, loadRepos())).toEqual(expectedResult);
    });

    it('should handle the reposLoaded action correctly', () => {
      const fixture = [{ name: 'yung repo' }];
      const username = 'test';
      const expectedResult = state
        .setIn(['userData', 'repositories'], fixture)
        .set('loading', false)
        .set('currentUser', username);

      expect(appReducer(state, reposLoaded(fixture, username))).toEqual(
        expectedResult,
      );
    });

    it('should handle the repoLoadingError action correctly', () => {
      const fixture = { msg: 'ay no mijo' };

      const expectedResult = state.set('error', fixture).set('loading', false);

      expect(appReducer(state, repoLoadingError(fixture))).toEqual(
        expectedResult,
      );
    });
  });

  describe('load user profile', () => {
    it('should handle the loadUserProfile action correctly', () => {
      const expectedResult = state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'profile'], false);

      expect(appReducer(state, loadUserProfile())).toEqual(expectedResult);
    });

    it('should handle the userProfileLoaded action correctly', () => {
      const userProfileFixture = [{ profile: {} }];

      const expectedResult = state
        .setIn(['userData', 'profile'], userProfileFixture)
        .set('loading', false);

      expect(appReducer(state, userProfileLoaded(userProfileFixture))).toEqual(
        expectedResult,
      );
    });

    it('should handle the userProfileLoadingError action correctly', () => {
      const fixture = { msg: 'ay caramba' };

      const expectedResult = state.set('error', fixture).set('loading', false);

      expect(appReducer(state, userProfileLoadingError(fixture))).toEqual(
        expectedResult,
      );
    });
  });

  describe('load user followers', () => {
    it('should handle the loadUserfollowers action correctly', () => {
      const expectedResult = state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'followers'], false);

      expect(appReducer(state, loadUserFollowers())).toEqual(expectedResult);
    });

    it('should handle the userFollowersLoaded action correctly', () => {
      const followersFixture = [{ followers: {} }];

      const expectedResult = state
        .setIn(['userData', 'followers'], followersFixture)
        .set('loading', false);

      expect(appReducer(state, userFollowersLoaded(followersFixture))).toEqual(
        expectedResult,
      );
    });

    it('should handle the userFollowersLoadingError action correctly', () => {
      const fixture = { msg: 'ay caramba' };

      const expectedResult = state.set('error', fixture).set('loading', false);

      expect(appReducer(state, userFollowersLoadingError(fixture))).toEqual(
        expectedResult,
      );
    });
  });
});
