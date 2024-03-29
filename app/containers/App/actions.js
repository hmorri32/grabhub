/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_USER_PROFILE,
  LOAD_USER_PROFILE_SUCCESS,
  LOAD_USER_PROFILE_ERROR,
  LOAD_USER_FOLLOWERS,
  LOAD_USER_FOLLOWERS_SUCCESS,
  LOAD_USER_FOLLOWERS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 * @param  {object} error The error
 * @return {object} An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return { type: LOAD_REPOS_ERROR, error };
}

/**
 * Load the user profile. this action starts the request saga
 * @return {object} An action object with a type of LOAD_USER_PROFILE
 */
export const loadUserProfile = () => ({ type: LOAD_USER_PROFILE });

/**
 * Dispatched when the user profile is loaded by the request saga
 * @param  {object} userProfile The user profile data
 * @return {object}      An action object with a type of LOAD_USER_PROFILE_SUCCESS passing the user profile
 */
export const userProfileLoaded = userProfile => ({
  type: LOAD_USER_PROFILE_SUCCESS,
  userProfile,
});

/**
 * Dispatched when loading the user profile fails
 * @param  {object} error The error returned
 * @return {object} An action object with a type of LOAD_USER_PROFILE_ERROR passing the error
 */
export const userProfileLoadingError = error => ({
  type: LOAD_USER_PROFILE_ERROR,
  error,
});

/**
 * Load the user's followers. this action starts the request saga
 * @return {object} An action object with a type of LOAD_USER_FOLLOWERS
 */
export const loadUserFollowers = () => ({ type: LOAD_USER_FOLLOWERS });

/**
 * Dispatched when the user profile is loaded by the request saga
 * @param  {array} followers The user profile data
 * @return {object} An action object with a type of LOAD_USER_FOLLOWERS_SUCCESS passing the user profile
 */
export const userFollowersLoaded = followers => ({
  type: LOAD_USER_FOLLOWERS_SUCCESS,
  followers,
});

/**
 * Dispatched when loading the user's followers fails
 * @param  {object} error The error returned
 * @return {object} An action object with a type of LOAD_USER_FOLLOWERS_ERROR passing the error
 */
export const userFollowersLoadingError = error => ({
  type: LOAD_USER_FOLLOWERS_ERROR,
  error,
});
