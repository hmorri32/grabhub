/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const LOAD_USER_PROFILE = 'boilerplate/App/LOAD_USER_PROFILE';
export const LOAD_USER_PROFILE_SUCCESS = 'boilerplate/App/LOAD_USER_PROFILE_SUCCESS'; // prettier-ignore
export const LOAD_USER_PROFILE_ERROR = 'boilerplate/App/LOAD_USER_PROFILE_ERROR'; // prettier-ignore
export const LOAD_USER_FOLLOWERS = 'boilerplate/App/LOAD_USER_FOLLOWERS'; // prettier-ignore
export const LOAD_USER_FOLLOWERS_SUCCESS = 'boilerplate/App/LOAD_USER_FOLLOWERS_SUCCESS'; // prettier-ignore
export const LOAD_USER_FOLLOWERS_ERROR = 'boilerplate/App/LOAD_USER_FOLLOWERS_ERROR'; // prettier-ignore
