import { Map } from 'immutable';

const setLoggedIn = (state, loggedIn) => {
  return state.set('loggedIn', loggedIn);
};

const appReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.merge(action.state);
    case 'SET_LOGGED_IN':
      return setLoggedIn(state, action.loggedIn);
    default:
      return state;
  }
};

export default appReducer;
