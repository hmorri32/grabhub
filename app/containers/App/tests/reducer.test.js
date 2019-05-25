import { fromJS } from 'immutable';
import appReducer from '../reducer';
import {
  loadRepos,
  reposLoaded,
  repoLoadingError,
  loadUserProfile,
  userProfileLoaded,
  userProfileLoadingError,
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
      }),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadRepos action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'repositories'], false);

    expect(appReducer(state, loadRepos())).toEqual(expectedResult);
  });

  it('should handle the reposLoaded action correctly', () => {
    const fixture = [{ name: 'My Repo' }];
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
    const fixture = { msg: 'Not found' };

    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, repoLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loadUserProfile action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'profile'], false);

    expect(appReducer(state, loadUserProfile())).toEqual(expectedResult);
  });

  it('should handle the userProfileLoaded action correctly', () => {
    const fixture = [{ profile: {} }];

    const expectedResult = state
      .setIn(['userData', 'profile'], fixture)
      .set('loading', false);

    expect(appReducer(state, userProfileLoaded(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the userProfileLoadingError action correctly', () => {
    const fixture = { msg: 'Not found' };

    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, userProfileLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
