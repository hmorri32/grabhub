/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_USER_PROFILE_SUCCESS,
  LOAD_USER_PROFILE,
  LOAD_USER_PROFILE_ERROR,
  LOAD_USER_FOLLOWERS_SUCCESS,
  LOAD_USER_FOLLOWERS,
  LOAD_USER_FOLLOWERS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
    profile: false,
    followers: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state.set('error', action.error).set('loading', false);
    case LOAD_USER_PROFILE:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'profile'], false);
    case LOAD_USER_PROFILE_SUCCESS:
      return state
        .setIn(['userData', 'profile'], action.userProfile)
        .set('loading', false);
    case LOAD_USER_PROFILE_ERROR:
      return state.set('error', action.error).set('loading', false);
    case LOAD_USER_FOLLOWERS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'followers'], false);
    case LOAD_USER_FOLLOWERS_SUCCESS:
      return state
        .setIn(['userData', 'followers'], action.followers)
        .set('loading', false);
    case LOAD_USER_FOLLOWERS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
